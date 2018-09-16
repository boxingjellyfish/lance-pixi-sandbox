const Renderer = require('lance/render/Renderer');
let PIXI = null;

class MyRenderer extends Renderer {
    
    constructor(gameEngine, clientEngine) {
        super(gameEngine, clientEngine);
        PIXI = require('pixi.js');
        this.sprites = {};
        this.isReady = false;
    }

}

module.exports = MyRenderer;
