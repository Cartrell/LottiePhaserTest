import { DotLottie } from '@lottiefiles/dotlottie-web';
import CreatePhaserGame from './game/main';

const FpsElement = document.querySelector('#fps');
let FpsTimeMs = 0;
let FpsElapsedMs = null;
let FrameCount = 0;

// ------------------------------------------------------------------------------------------------
function createLottieAnimation(canvasId, animationUrl) {
  const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector(canvasId),
    src: animationUrl,
  });

  return (dotLottie);
}

// ------------------------------------------------------------------------------------------------
function onAnimationFrame(timeMs) {
  FrameCount += 1;

  if (FpsElapsedMs === null) {
    FpsElapsedMs = 0;
  } else {
    const elapsedMs = timeMs - FpsTimeMs;
    FpsElapsedMs += elapsedMs;
    FpsTimeMs = timeMs;

    if (FpsElapsedMs >= 1000) {
      FpsElement.innerHTML = FrameCount.toString(10);
      FrameCount = 0;
      FpsElapsedMs %= 1000;
    }
  }

  requestAnimationFrame(onAnimationFrame);
}

// ------------------------------------------------------------------------------------------------
function initFpsCounter() {
  if (!FpsElement) {
    return;
  }

  FpsElement.innerHTML = '0';
  FpsTimeMs = performance.now();

  requestAnimationFrame(onAnimationFrame);
}

// ------------------------------------------------------------------------------------------------
initFpsCounter();

const superMarioLottieUrl = './assets/super-mario-animation.lottie';
const animatedButtonLottieUrl = './assets/animated-button.lottie';
const testLottieUrl = './assets/test.lottie';

createLottieAnimation(
  '#dotlottie-canvas0',
  superMarioLottieUrl,
);

createLottieAnimation(
  '#dotlottie-canvas1',
  animatedButtonLottieUrl,
);

createLottieAnimation(
  '#dotlottie-canvas2',
  testLottieUrl,
);

CreatePhaserGame();
