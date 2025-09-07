//animation 1: header dropping in upon loading
const heading = document.getAnimations("heading");
let positionY = -200;
let velocityY = 0;
const gravity = 1.2;
const bounceFactor = -0.4;
const settleThreshold = 0.8;

function animateBounce() {
  velocityY += gravity;
  positionY += velocityY;
  const targetY = 0;
  if (positionY >= targetY) {
    positionY = targetY;
    velocityY *= bounceFactor;
    if (Math.abs(velocityY) < settleThreshold) {
      element.style.transform = `translateY(${targetY}px)`;
      return; // Stop the animation
    }
  }
  element.style.transform = `translateY(-50%, ${positionY}px)`;
  requestAnimationFrame(animateBounce);
}
animateBounce();
