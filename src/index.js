var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.load.image('bluebar', 'assets/sprites/bluebar.png');
        this.load.image('saw', 'assets/sprites/saw.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');

        let particles = this.add.particles('red');

        let emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 0.05, end: 0 },
            blendMode: 'SCREEN'
        });

        let ball = this.physics.add.image(400, 100, 'saw')
            .setScale(0.3)
            .setAngularVelocity(420);

        ball.setVelocity(100, 200);
        ball.setBounce(1, 1);
        ball.setCollideWorldBounds(true);

        emitter.startFollow(ball);

         paddle = this.physics.add.image(400, 500, 'bluebar')
            .setScale(3)
            .setImmovable(true);
        //paddle.body = this.physics.StaticBody();
        paddle.setBounce(0.2);
        paddle.setCollideWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(ball, paddle);
    }

    function update ()
    {
        let paddleSpeed = 160;
        if (cursors.left.isDown)
        {
            paddle.setVelocityX(-paddleSpeed);
        }
        else if (cursors.right.isDown)
        {
            paddle.setVelocityX(paddleSpeed);
        }
        else
        {
            paddle.setVelocityX(0);
        }
    }