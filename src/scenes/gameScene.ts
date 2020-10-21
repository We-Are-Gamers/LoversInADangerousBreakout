import 'phaser';
import { GameAssets } from '../assets';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
}

export class GameScene extends Phaser.Scene{

    private paddle: Phaser.Physics.Arcade.Image;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.setBaseURL(GameAssets.basesUrl);

        Object.keys(GameAssets.assetMap).forEach(assetName => {
            this.load.image(assetName, GameAssets.assetMap[assetName]);
        });
    }
    
    public create ()
    {
        this.add.image(400, 300, GameAssets.sky);

        let particles = this.add.particles(GameAssets.red);

        let emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 0.05, end: 0 },
            blendMode: 'SCREEN'
        });

        let ball = this.physics.add.image(400, 100, GameAssets.saw)
            .setScale(0.3)
            .setAngularVelocity(420);

        ball.setVelocity(100, 200);
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);

        emitter.startFollow(ball);

        this.paddle = this.physics.add.image(400, 500, GameAssets.blueBar)
            .setScale(3)
            .setImmovable(true);
        //paddle.body = this.physics.StaticBody();
        this.paddle.setBounce(0.2);
        this.paddle.setCollideWorldBounds(true);
        
        let rooms = [];
        for(let i=0; i<5; i++) {
            let roomRow = [];
            for(let j=0; j<10; j++) {
                let room = this.physics.add.image(75 + (70 * j), 100 + (50 * i), GameAssets.sonic);
                room.setBounce(0.2);
                room.setImmovable(true);
                //room.onCollide(true);
                
                this.physics.add.collider(ball, room);

                roomRow[j] = room;
            }
            rooms[i] = roomRow;
        }

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(ball, this.paddle);
    }

    public update ()
    {
        let paddleSpeed = 160;
        if (this.cursors.left.isDown)
        {
            this.paddle.setVelocityX(-paddleSpeed);
        }
        else if (this.cursors.right.isDown)
        {
            this.paddle.setVelocityX(paddleSpeed);
        }
        else
        {
            this.paddle.setVelocityX(0);
        }
    }

}