import 'phaser'

export class Room {
    public x = 0;
    public y = 0;
    public texture = '';
    public gameObject: Phaser.Types.Physics.Arcade.GameObjectWithBody = null;

    private health = 3;

    public onBallCollide(){
        this.health--;
        if(this.health <= 0){
            this.gameObject.destroy();
        }
    }

    public setGameObject(gameObject: Phaser.Types.Physics.Arcade.GameObjectWithBody){
        this.gameObject = gameObject;
    }

    public constructor(x: number, y: number, texture: string){
        this.x = x;
        this.y = y;
        this.texture = texture;
    }

}