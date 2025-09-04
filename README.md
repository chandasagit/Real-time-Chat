# Real-time Chat Application

A full-stack real-time chat application built with **React + Vite (frontend)** and **Node.js + Express + Socket.IO (backend)**.  
Deployed on **Azure Kubernetes Service (AKS)** for scalability.

##  Features
-  Real-time messaging using WebSockets
-  Read receipts (extendable)
-  Group chat rooms
-  Scalable design ready for cloud deployment
-  Azure-ready (AKS manifests can be added)

##  Tech Stack
- **Frontend:** React, Vite, Socket.IO Client
- **Backend:** Node.js, Express, Socket.IO
- **Deployment:** Azure Kubernetes Service (AKS), Docker

## 📂 Project Structure  
<pre>
realtime-chat/
├── backend/ # Express + Socket.IO server
└── frontend/ # React + Vite client
</pre>

<pre>
realtime-chat/
├── backend/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── eslint.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── socket.js
│       └── components/
│           ├── ChatList.jsx
│           ├── ChatWindow.jsx
│           └── SendBox.jsx
└── README.md
</pre>

## Setup Backend
<pre>
cd backend
npm install
npm start
</pre>
Runs on http://localhost:5000

## Setup Froentend
<pre>
cd ../frontend
npm install
npm run dev
</pre>
Runs on http://localhost:5173

## Usage
- Open frontend in two browser tabs
- Type a message in one tab
- See it instantly appear in the other tab

