//  Based on the Emoji Match game by Tom Miller (https://codepen.io/creativeocean/full/OeKjmp)
import Phaser from 'phaser';
import BootScene from './BootScene.js';
import PreloaderScene from './PreloaderScene.js';
import MainMenuScene from './MainMenuScene.js';
import GameScene from './GameScene.js';

export default function CreatePhaserGame() {
  /** @type {Phaser.Types.Core.GameConfig} */
  const config = {
    type: Phaser.WEBGL,

    backgroundColor: '#008eb0',

    canvas: document.querySelector('#phaser-canvas'),

    scene: [ BootScene, PreloaderScene, MainMenuScene, GameScene ],
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
    },

    width: 800,
    height: 600,
  };

  return (new Phaser.Game(config));
}