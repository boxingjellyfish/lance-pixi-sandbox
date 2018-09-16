const ServerEngine = require('lance/ServerEngine');

class MyServerEngine extends ServerEngine {
    
    constructor(io, gameEngine, inputOptions) {
        super(io, gameEngine, inputOptions);
    }

    start() {
        super.start();
    }

    onPlayerConnected(socket) {
        super.onPlayerConnected(socket);

        let makePlayer = () => {
            let player = this.gameEngine.makePlayer(socket.playerId);
        };

        // handle client restart requests
        socket.on('requestRestart', makePlayer);
    }

    onPlayerDisconnected(socketId, playerId) {
        super.onPlayerDisconnected(socketId, playerId);


        // iterate through all objects, delete those that are associated with the player (ship and missiles)
        let playerObjects = this.gameEngine.world.queryObjects({ playerId: playerId });
        playerObjects.forEach( obj => {
            this.gameEngine.removeObjectFromWorld(obj.id);
        });
    }

}

module.exports = MyServerEngine;