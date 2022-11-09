// canvas 烟花效果

import { random } from "./math";

const PI2 = Math.PI * 2;

const canvas: HTMLCanvasElement = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "999";
canvas.style.pointerEvents = "none";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const maxCount = 30;
const minCount = 10;
export function firework() {
  const colors = ["#EF5350", "#EC407A", "#AB47BC", "#7E57C2", "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28", "#FFA726", "#FF7043", "#8D6E63", "#BDBDBD", "#78909C"];
  const maxR = 3;
  const minR = 1;
  const maxSpeed = 0.2;
  const minSpeed = 0.1;
  const maxLife = 50;
  const minLife = 20;

  const maxAngle = Math.PI * 2;
  const minAngle = 0;
  const count = random(minCount, maxCount);
  const angle = random(minAngle, maxAngle);
  const speed = random(minSpeed, maxSpeed);
  const life = random(minLife, maxLife);
  const color = colors[random(0, colors.length - 1)];
  const r = random(minR, maxR);

  const x = random(0, window.innerWidth);
  const y = random(0, window.innerHeight);

  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;

  return {
    x,
    y,
    vx,
    vy,
    r,
    color,
    life,
    count,
  };
}

export function updateFireworks(fireworks: any[], ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework) => {
    firework.x += firework.vx;
    firework.y += firework.vy;
    firework.life -= 1;
    if (firework.life < 0) {
      return;
    }
    ctx.beginPath();
    ctx.arc(firework.x, firework.y, firework.r, 0, PI2);
    ctx.fillStyle = firework.color;
    ctx.fill();
    ctx.closePath();
  });
}

export function createFireworks() {
  const fireworks = [];
  const count = random(minCount, maxCount);
  for (let i = 0; i < count; i++) {
    fireworks.push(firework());
  }
  updateFireworks(fireworks, ctx!);
  requestAnimationFrame(() => {
    createFireworks();
  });
}
