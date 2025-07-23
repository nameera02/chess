const express=require("express");
const socket=require("socket.io");
const http=require("http");
const path = require("path");
const {Chess}=require("chess.js");
const app=express();
const chess=new Chess();
const server=http.createServer(app);
const io=socket(server);
let players={};
let currentPlayer="w";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req ,res)=>{
    res.render("index")
})

io.on("connection",function(unisocket){
    console.log("connected");
    if(!players.white){
        players.white=unisocket.id;
        unisocket.emit("playerRole",'w')
    }
    else if(!players.black){
        players.black=unisocket.id;
        unisocket.emit("playerRole",'b')
    }
    else{
        unisocket.emit("spectatorRole")

    }
    unisocket.on("disconnect",function(){
        if(unisocket.id===players.white){
            delete players.white;
        }else if(unisocket.id===players.white){
            delete players.black;
        }
    })
    unisocket.on("move",(move)=>{
        try{
        if(chess.turn()==='w' && unisocket.id !== players.white) return;
        if(chess.turn()==='b' && unisocket.id !== players.black) return;

        const result=chess.move(move);
        if(result){
            currentPlayer=chess.turn();
            io.emit("move",move)
            io.emit("boardState",chess.fen())
        }else{
            console.log("Invalid move : ",move);
            unisocket.emit("invalidMove",move)
        }
    }
    catch(err){
        console.log(err);
        unisocket.emit("Invalid move : ",move)
            
        }
    })
});

server.listen(3000,function(){
    console.log("listening on http://localhost:3000");
})