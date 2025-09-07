document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("heading");
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
        element.style.transform = `translateX(-50%) translateY(${targetY}px)`;
        return;
      }
    }

    element.style.transform = `translateX(-50%) translateY(${positionY}px)`;
    requestAnimationFrame(animateBounce);
  }

  animateBounce();
});
