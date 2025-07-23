# ♟️ Real-Time Multiplayer Chess Game

This is a simple real-time multiplayer chess game built with **Node.js**, **Express**, **Socket.IO**, and **chess.js**. It allows two players to connect and play chess in the browser with live updates.

---

## 🚀 Features

- Real-time gameplay with WebSockets (Socket.IO)
- Enforced chess rules using [chess.js](https://github.com/jhlywa/chess.js)
- Player roles assigned as White or Black
- Spectators can view the game
- Notifies clients of invalid moves
- Resets the game when both players disconnect (optional)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **WebSockets**: Socket.IO
- **Chess Logic**: [chess.js](https://www.npmjs.com/package/chess.js)
- **Frontend**: EJS templates + HTML/CSS/JS

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/chess-game.git
cd chess-game
