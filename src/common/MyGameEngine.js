const SimplePhysicsEngine = require('lance/physics/SimplePhysicsEngine');
const GameEngine = require('lance/GameEngine');
const TwoVector = require('lance/serialize/TwoVector');
const Player = require('./Player');
const Ball = require('./Ball');

class MyGameEngine extends GameEngine {
    
    constructor(options) {
        super(options);
        this.physicsEngine = new SimplePhysicsEngine({
            gameEngine: this,
            collisions: {
                type: 'brute'
            }
        });
    }

    registerClasses(serializer){
        serializer.registerClass(Player);
        serializer.registerClass(Ball);
    }

    initWorld(){
        super.initWorld({
            worldWrap: false,
            width: 3000,
            height: 3000
        });
    }

    start() {
        super.start();
        this.on('collisionStart', this.handleCollisionStart.bind(this));
        this.on('postStep', this.handlePostStep.bind(this));
    }

    handleCollisionStart(e) {
        let collisionObjects = Object.keys(e).map(k => e[k]);
        let player = collisionObjects.find(o => o instanceof Ship);
        let ball = collisionObjects.find(o => o instanceof Missile);

        if (!player || !ball)
            return;
    }

    handlePostStep(e){

    }

    processInput(inputData, playerId, isServer) {

        super.processInput(inputData, playerId);

       let player = this.world.queryObject({
            playerId: playerId,
            instanceType: Player
        });

        if (player) {
            // handle
        }
    }

    makePlayer(playerId) {
        let newPlayerX = Math.floor(Math.random()*(this.worldSettings.width-200)) + 200;
        let newPlayerY = Math.floor(Math.random()*(this.worldSettings.height-200)) + 200;

        let player = new Ship(this, null, {
            position: new TwoVector(newPlayerX, newPlayerY)
        });

        player.playerId = playerId;
        this.addObjectToWorld(player);
        console.log(`player added: ${player.toString()}`);

        return player;
    }
}

module.exports = MyGameEngine;