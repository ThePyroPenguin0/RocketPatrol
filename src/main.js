let config =
{
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play],

    fps: // This is intentional - I wanted to have a little bit of that retro refresh rate effect :)
    {
        target: 24,
        forceSetTimeOut: true,
    },
};

let game = new Phaser.Game(config);

let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

let keyFIRE, keyRESET, keyLEFT, keyRIGHT;