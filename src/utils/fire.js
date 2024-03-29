/* eslint-disable no-new */
"use strict";
const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) {
        descriptor.writable = true;
      }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  } return function (Constructor, protoProps, staticProps) {
    if (protoProps) {
      defineProperties(Constructor.prototype, protoProps);
    }
    if (staticProps) {
      defineProperties(Constructor, staticProps);
    }
    return Constructor;
  };
}());
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
const Progress = (function () {
  function Progress() {
    // eslint-disable-next-line prefer-rest-params
    const param = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    _classCallCheck(this, Progress);
    this.timestamp = null;
    this.duration = param.duration || Progress.CONST.DURATION;
    this.progress = 0;
    this.delta = 0;
    this.progress = 0;
    this.isLoop = !!param.isLoop;
    this.reset();
  }
  Progress.prototype.reset = function reset() {
    this.timestamp = null;
  };
  Progress.prototype.start = function start(now) {
    this.timestamp = now;
  };
  Progress.prototype.tick = function tick(now) {
    if (this.timestamp) {
      this.delta = now - this.timestamp;
      this.progress = Math.min(this.delta / this.duration, 1);
      if (this.progress >= 1 && this.isLoop) {
        this.start(now);
      }
      return this.progress;
    } else {
      return 0;
    }
  }; _createClass(Progress, null, [{
    key: "CONST",
    get: function get() {
      return {
        DURATION: 1000,
      };
    },
  }]); return Progress;
}()); const Confetti = (function () {
  function Confetti(param) {
    _classCallCheck(this, Confetti); this.parent = param.elm || document.body; this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = param.width || this.parent.offsetWidth; this.height = param.height || this.parent.offsetHeight;
    this.length = param.length || Confetti.CONST.PAPER_LENGTH; this.yRange = param.yRange || this.height * 2;
    this.progress = new Progress({
      duration: param.duration, isLoop: true,
    });
    this.rotationRange = typeof param.rotationLength === "number" ? param.rotationRange : 10; this.speedRange = typeof param.speedRange === "number" ? param.speedRange : 10;
    this.sprites = [];
    this.canvas.style.cssText = ["display: block", "position: absolute", "top: 0", "left: 0", "pointer-events: none", " z-index: 9;"].join(";");
    this.render = this.render.bind(this);
    this.build();
    this.parent.append(this.canvas);
    this.progress.start(performance.now());
    requestAnimationFrame(this.render);
  }
  Confetti.prototype.build = function build() {
    for (let i = 0; i < this.length; ++i) {
      const canvas = document.createElement("canvas"); const ctx = canvas.getContext("2d");
      canvas.width = Confetti.CONST.SPRITE_WIDTH; canvas.height = Confetti.CONST.SPRITE_HEIGHT; canvas.position = {
        initX: Math.random() * this.width, initY: -canvas.height - Math.random() * this.yRange,
      };
      canvas.rotation = this.rotationRange / 2 - Math.random() * this.rotationRange;
      canvas.speed = this.speedRange / 2 + Math.random() * (this.speedRange / 2);
      ctx.save(); ctx.fillStyle = Confetti.CONST.COLORS[Math.random() * Confetti.CONST.COLORS.length | 0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      this.sprites.push(canvas);
    }
  };
  Confetti.prototype.render = function render(now) {
    const progress = this.progress.tick(now);
    this.canvas.width = this.width;
    this.canvas.height = this.height; for (let i = 0; i < this.length; ++i) {
      this.ctx.save();
      this.ctx.translate(
        this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
        this.sprites[i].position.initY + progress * (this.height + this.yRange),
      );
      this.ctx.rotate(this.sprites[i].rotation);
      this.ctx.drawImage(this.sprites[i],
        -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
        -Confetti.CONST.SPRITE_HEIGHT / 2,
        Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
        Confetti.CONST.SPRITE_HEIGHT);
      this.ctx.restore();
    }
    requestAnimationFrame(this.render);
  }; _createClass(Confetti, null, [{
    key: "CONST",
    get: function get() {
      return {
        // SPRITE_WIDTH纸屑欢度 SPRITE_HEIGHT纸屑高度
        SPRITE_WIDTH: 8,
        SPRITE_HEIGHT: 10,
        PAPER_LENGTH: 100,
        DURATION: 8000,
        ROTATION_RATE: 50,
        COLORS: [
          "#EF5350", "#EC407A", "#AB47BC", "#7E57C2", "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#D4E157", "#FFEE58", "#FFCA28", "#FFA726", "#FF7043", "#8D6E63", "#BDBDBD", "#78909C"],
      };
    },
  }]); return Confetti;
}());
const firework = function (h, length = 100) {
  // DURATION速度, LENGTH个数
  const height = h;
  const DURATION = 15000;
  const LENGTH = length;
  new Confetti({
    width: window.innerWidth, height, length: LENGTH, duration: DURATION,
  });
  setTimeout(() => {
    new Confetti({
      width: window.innerWidth, height, length: LENGTH, duration: DURATION,
    });
  }, DURATION / 2);
};

export { firework };
