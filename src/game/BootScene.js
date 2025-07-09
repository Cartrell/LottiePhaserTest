import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        this.registry.set('highscore', 0);

        this.scene.start('Preloader');
    }
}