Test of Lottie animations running side-by-side with a simple Phaser 3 game.

It added some sample Lottie animations to the web page, as well as load up a Phaser game.

[dotLottie-web](https://github.com/LottieFiles/dotlottie-web) is used to play the Lottie animations.

An FPS counter is available to view frames performance during rendering.

The game is a modified version of one of the example games on Phaser's site. It has been modified to include a texture atlas of _all_ the images used in the game, not just the emojis.

In order to re-built the atlas, I needed to extract all the emoji sprites, so I could re-build them, along with the other graphics into a new atlas. I used [Phaser Sprite Sheet Unpacker](https://github.com/lvcabral/PhaserSpriteSheetUnpacker) to help with this.

The test can be viewed on my website: [https://gameplaycoder.com/games/lottiePhaserTest/](https://gameplaycoder.com/games/lottiePhaserTest/).