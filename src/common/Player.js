const DynamicObject = require('lance/serialize/DynamicObject');

class Player extends DynamicObject {
    
    constructor(gameEngine, options, props) {
        super(gameEngine, options, props);
        if (props && props.playerId)
            this.playerId = props.playerId;
        this.class = Player;
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'player');
        }
    }
}

module.exports = Player;