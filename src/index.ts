import "phaser";
import { GameScene } from './scenes/gameScene';

var config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: GameScene
};

var game = new Phaser.Game(config);