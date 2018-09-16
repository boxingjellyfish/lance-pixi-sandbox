const ClientEngine = require('lance/ClientEngine');
const ClientEngine = require('lance/ClientEngine');

class MyClientEngine extends ClientEngine {
    
    constructor(gameEngine, options) {
        super(gameEngine, options, MyRenderer);
    }

}

module.exports = MyClientEngine;