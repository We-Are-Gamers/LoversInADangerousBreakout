export class GameAssets {

    private static _assetMap : { [assetName: string]: string} = {};
    private static readonly _assetBaseURL = 'http://labs.phaser.io';

    public static sonic = GameAssets.addAsset('sonic', 'assets/sprites/sonic.png');
    public static saw = GameAssets.addAsset('saw', 'assets/sprites/saw.png');
    public static blueBar = GameAssets.addAsset('bluebar', 'assets/sprites/bluebar.png');
    public static red = GameAssets.addAsset('red', 'assets/particles/red.png');
    public static sky = GameAssets.addAsset('sky', 'assets/skies/space3.png');



    private static addAsset(name: string, url: string) : string{
        this.assetMap[name] = url;
        return name;
    };
 
    public static get assetMap(): { [assetName: string]: string} {
        return this._assetMap;
    }

    public static get basesUrl(): string {
        return this._assetBaseURL
    }

}