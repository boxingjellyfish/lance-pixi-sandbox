// Libs
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const fs = require("fs");

const MyGameEngine = require("./src/common/MyGameEngine")
const MyServerEngine = require("./src/server/MyServerEngine")

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, "./index.html");

const server = express()
    .use(express.static("public"))
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log("Listening on " + PORT));

const io = socketIO(server);

const gameEngine = new MyGameEngine({ traceLevel: 1000 });
const serverEngine = new MyServerEngine(io, gameEngine, {
    debug: {},
    updateRate: 6,
    timeoutInterval: 0
});

serverEngine.start();