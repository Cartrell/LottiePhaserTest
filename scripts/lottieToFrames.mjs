import renderLottie from 'puppeteer-lottie';
import process from 'process';

try {
  await renderLottie({
    path: './assets/super-mario-animation.json',
    output: './assets/frames/frame-%d.png', // sprintf format
    height: 128
  });
} catch (exc) {
  console.error(exc);
  process.exit(-1);
}

console.log("Boom. Done.");