/**
 * PixelPet — premium cursor-following pixel pet
 *
 * HOW TO REPLACE THE SPRITE SHEET:
 * 1. Set `spriteUrl` to your image path (e.g. '/pet/sprites/fox.png')
 * 2. Match `frameWidth`, `frameHeight`, and `framesPerRow` to your sheet layout
 * 3. Update `animations` frame indices to match your sheet rows/columns
 *
 * Sprite sheet layout (default built-in):
 *   Row 0: idle (2 frames)
 *   Row 1: walk (4 frames)
 *   Row 2: run  (4 frames)
 *   Row 3: sit  (1 frame)
 *   Row 4: sleep (2 frames)
 */

(function () {
  "use strict";

  /** @typedef {'WAKING'|'WALKING'|'RUNNING'|'IDLE'|'SITTING'|'SLEEPING'} PetState */

  const DEFAULT_CONFIG = {
    // Replace with '/pet/sprites/your-pet.png' to use a custom sprite sheet
    spriteUrl: null,
    frameWidth: 32,
    frameHeight: 32,
    framesPerRow: 4,
    followDistance: 26,
    walkLerp: 0.09,
    runLerp: 0.16,
    momentum: 0.82,
    runThreshold: 120,
    arriveThreshold: 4,
    idleBeforeSit: 2000,
    idleBeforeSleep: 8000,
    maxLean: 12,
    animations: {
      idle: { row: 0, frames: 2, fps: 4 },
      walk: { row: 1, frames: 4, fps: 9 },
      run: { row: 2, frames: 4, fps: 14 },
      sit: { row: 3, frames: 1, fps: 1 },
      sleep: { row: 4, frames: 2, fps: 2 },
    },
  };

  /**
   * Draw a simple pixel cat frame onto canvas context at (ox, oy)
   * Replace this generator entirely when using spriteUrl
   */
  function drawCatFrame(ctx, ox, oy, variant, frameIndex = 0) {
    const W = "#e8985e"; // body
    const D = "#c97a3a"; // dark
    const E = "#222"; // eyes
    const P = "#ffb6c1"; // nose

    ctx.clearRect(ox, oy, 32, 32);

    // Body base
    ctx.fillStyle = W;
    ctx.fillRect(ox + 10, oy + 14, 12, 10);
    ctx.fillRect(ox + 8, oy + 16, 16, 8);

    // Head
    ctx.fillRect(ox + 9, oy + 8, 14, 10);
    // Ears
    ctx.fillStyle = D;
    ctx.fillRect(ox + 8, oy + 6, 4, 4);
    ctx.fillRect(ox + 20, oy + 6, 4, 4);
    ctx.fillStyle = W;
    ctx.fillRect(ox + 9, oy + 7, 3, 3);
    ctx.fillRect(ox + 20, oy + 7, 3, 3);

    // Eyes
    ctx.fillStyle = E;
    if (variant === "sleep") {
      ctx.fillRect(ox + 12, oy + 13, 3, 1);
      ctx.fillRect(ox + 17, oy + 13, 3, 1);
    } else {
      ctx.fillRect(ox + 12, oy + 12, 2, 2);
      ctx.fillRect(ox + 18, oy + 12, 2, 2);
    }

    // Nose
    ctx.fillStyle = P;
    ctx.fillRect(ox + 15, oy + 14, 2, 2);

    // Tail
    ctx.fillStyle = W;
    const tailBob = variant === "walk" ? (frameIndex % 2) : 0;
    ctx.fillRect(ox + 22, oy + 18 + tailBob, 6, 3);
    ctx.fillRect(ox + 26, oy + 16 + tailBob, 3, 3);

    // Legs — animate per variant
    ctx.fillStyle = D;
    if (variant === "sit") {
      ctx.fillRect(ox + 10, oy + 24, 4, 4);
      ctx.fillRect(ox + 18, oy + 24, 4, 4);
    } else if (variant === "sleep") {
      ctx.fillRect(ox + 8, oy + 22, 16, 6);
    } else if (variant === "run") {
      const f = frameIndex % 4;
      const legs = [
        [[10, 24], [20, 22]],
        [[10, 22], [20, 24]],
        [[11, 24], [19, 22]],
        [[9, 22], [21, 24]],
      ][f];
      legs.forEach(([lx, ly]) => ctx.fillRect(ox + lx, oy + ly, 3, 4));
    } else if (variant === "walk") {
      const f = frameIndex % 4;
      if (f % 2 === 0) {
        ctx.fillRect(ox + 10, oy + 24, 3, 4);
        ctx.fillRect(ox + 19, oy + 22, 3, 4);
      } else {
        ctx.fillRect(ox + 10, oy + 22, 3, 4);
        ctx.fillRect(ox + 19, oy + 24, 3, 4);
      }
    } else {
      // idle
      ctx.fillRect(ox + 10, oy + 24, 3, 4);
      ctx.fillRect(ox + 19, oy + 24, 3, 4);
    }
  }

  /** Build procedural sprite sheet when no external spriteUrl is provided */
  function buildDefaultSpriteSheet(config) {
    const { frameWidth, frameHeight, animations } = config;
    const rows = 5;
    const cols = 4;
    const canvas = document.createElement("canvas");
    canvas.width = frameWidth * cols;
    canvas.height = frameHeight * rows;
    const ctx = canvas.getContext("2d");

    const rowVariants = ["idle", "walk", "run", "sit", "sleep"];
    rowVariants.forEach((variant, row) => {
      const frameCount = animations[variant === "idle" ? "idle" : variant]?.frames || 1;
      for (let col = 0; col < cols; col++) {
        drawCatFrame(
          ctx,
          col * frameWidth,
          row * frameHeight,
          col < frameCount ? variant : "idle",
          col
        );
      }
    });

    return canvas.toDataURL("image/png");
  }

  class PixelPet {
    /** @param {Partial<typeof DEFAULT_CONFIG>} userConfig */
    constructor(userConfig = {}) {
      /** @type {typeof DEFAULT_CONFIG} */
      this.config = { ...DEFAULT_CONFIG, ...userConfig };
      /** @type {PetState} */
      this.state = "IDLE";
      this.prevState = "IDLE";

      this.x = window.innerWidth * 0.5;
      this.y = window.innerHeight * 0.5;
      this.vx = 0;
      this.vy = 0;
      this.mouseX = this.x;
      this.mouseY = this.y;
      this.targetX = this.x;
      this.targetY = this.y;
      this.facingRight = true;
      this.lean = 0;
      this.lastMouseMove = performance.now();
      this.idleStart = performance.now();
      this.frameIndex = 0;
      this.frameElapsed = 0;
      this.mouseSpeed = 0;
      this.lastMouseX = this.mouseX;
      this.lastMouseY = this.mouseY;
      this.rafId = 0;
      this.destroyed = false;

      this._buildDOM();
      this._loadSprite();
      this._bindEvents();
      this._loop = this._loop.bind(this);
      this.rafId = requestAnimationFrame(this._loop);
    }

    _buildDOM() {
      const root = document.createElement("div");
      root.id = "pixel-pet";
      root.setAttribute("aria-hidden", "true");
      root.style.setProperty("--pet-size", this.config.frameWidth + "px");

      const sprite = document.createElement("div");
      sprite.id = "pixel-pet-sprite";
      root.appendChild(sprite);

      document.body.appendChild(root);
      this.root = root;
      this.sprite = sprite;
    }

    _loadSprite() {
      const url =
        this.config.spriteUrl || buildDefaultSpriteSheet(this.config);
      this.sprite.style.backgroundImage = `url(${url})`;
      this.sprite.style.backgroundSize = `${this.config.frameWidth * this.config.framesPerRow}px auto`;
    }

    _bindEvents() {
      this._onMouseMove = (e) => {
        const now = performance.now();
        const dt = Math.max(now - (this._lastMoveTime || now), 1);
        this.mouseSpeed = Math.hypot(
          e.clientX - this.lastMouseX,
          e.clientY - this.lastMouseY
        ) / dt;

        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this._lastMoveTime = now;

        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        if (this.state === "SLEEPING" || this.state === "SITTING") {
          this.state = "WAKING";
        }

        this.lastMouseMove = now;
        this.idleStart = now;
      };

      window.addEventListener("mousemove", this._onMouseMove, { passive: true });
    }

    /** Compute stop point — maintain followDistance from cursor */
    _updateTarget() {
      const dx = this.mouseX - this.x;
      const dy = this.mouseY - this.y;
      const dist = Math.hypot(dx, dy) || 1;
      const offset = Math.min(this.config.followDistance, dist - 1);
      if (dist > this.config.followDistance) {
        this.targetX = this.mouseX - (dx / dist) * this.config.followDistance;
        this.targetY = this.mouseY - (dy / dist) * this.config.followDistance;
      } else {
        this.targetX = this.x;
        this.targetY = this.y;
      }
      return Math.hypot(this.targetX - this.x, this.targetY - this.y);
    }

    /** Finite state machine — transitions */
    _updateState(distToTarget, now) {
      const idleTime = now - this.idleStart;
      const speed = Math.hypot(this.vx, this.vy);

      if (this.state === "WAKING") {
        this.state = distToTarget > this.config.arriveThreshold ? "WALKING" : "IDLE";
        return;
      }

      if (this.state === "SLEEPING") {
        if (now - this.lastMouseMove < 100) this.state = "WAKING";
        return;
      }

      if (this.state === "SITTING") {
        if (now - this.lastMouseMove < 100) {
          this.state = "WAKING";
          return;
        }
        if (idleTime >= this.config.idleBeforeSleep) {
          this.state = "SLEEPING";
        }
        return;
      }

      if (distToTarget > this.config.arriveThreshold || speed > 0.4) {
        this.state =
          distToTarget > this.config.runThreshold || this.mouseSpeed > 1.2
            ? "RUNNING"
            : "WALKING";
        this.idleStart = now;
      } else if (speed < 0.3) {
        if (idleTime >= this.config.idleBeforeSit) {
          this.state = "SITTING";
        } else {
          this.state = "IDLE";
        }
      }
    }

    _getAnimKey() {
      switch (this.state) {
        case "RUNNING":
          return "run";
        case "WALKING":
        case "WAKING":
          return "walk";
        case "SITTING":
          return "sit";
        case "SLEEPING":
          return "sleep";
        default:
          return "idle";
      }
    }

    _updateAnimation(dt) {
      const key = this._getAnimKey();
      const anim = this.config.animations[key];
      if (!anim) return;

      this.frameElapsed += dt;
      const frameDuration = 1000 / anim.fps;

      if (this.frameElapsed >= frameDuration) {
        this.frameElapsed -= frameDuration;
        this.frameIndex = (this.frameIndex + 1) % anim.frames;
      }

      const col = this.frameIndex;
      const row = anim.row;
      this.sprite.style.backgroundPosition = `-${col * this.config.frameWidth}px -${row * this.config.frameHeight}px`;
    }

    _loop(timestamp) {
      if (this.destroyed) return;

      const now = performance.now();
      const dt = Math.min(now - (this._lastFrame || now), 32);
      this._lastFrame = now;

      const dist = this._updateTarget();
      this._updateState(dist, now);

      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const distToTarget = Math.hypot(dx, dy);

      if (distToTarget > 0.5) {
        const lerp =
          distToTarget > this.config.runThreshold
            ? this.config.runLerp
            : this.config.walkLerp;

        // Lerp with momentum — no teleport, smooth deceleration near target
        const ease = Math.min(lerp, distToTarget * 0.02);
        this.vx = this.vx * this.config.momentum + dx * ease;
        this.vy = this.vy * this.config.momentum + dy * ease;

        // Slow down as approaching target
        const damp = Math.min(1, distToTarget / 40);
        this.x += this.vx * damp;
        this.y += this.vy * damp;

        // Face movement direction
        if (Math.abs(this.vx) > 0.05) {
          this.facingRight = this.vx > 0;
        } else if (Math.abs(this.mouseX - this.x) > 1) {
          this.facingRight = this.mouseX > this.x;
        }

        // Lean while turning
        const targetLean = Math.max(
          -this.config.maxLean,
          Math.min(this.config.maxLean, this.vx * 1.5)
        );
        this.lean += (targetLean - this.lean) * 0.12;
      } else {
        // Decay velocity smoothly — no jitter
        this.vx *= 0.75;
        this.vy *= 0.75;
        this.lean *= 0.85;
      }

      // Single DOM write per frame — GPU transform
      const flip = this.facingRight ? 1 : -1;
      this.root.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
      this.sprite.style.transform = `scaleX(${flip}) rotate(${this.lean}deg)`;

      // CSS class for sleep indicator
      this.root.classList.toggle("sleeping", this.state === "SLEEPING");

      this._updateAnimation(dt);
      this.prevState = this.state;

      this.rafId = requestAnimationFrame(this._loop);
    }

    destroy() {
      this.destroyed = true;
      cancelAnimationFrame(this.rafId);
      window.removeEventListener("mousemove", this._onMouseMove);
      this.root?.remove();
    }
  }

  /** Boot — skip on touch devices */
  function initPixelPet(config) {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return null;
    if (window.__pixelPet) window.__pixelPet.destroy();
    window.__pixelPet = new PixelPet(config);
    return window.__pixelPet;
  }

  // Auto-init when loaded in Next.js / portfolio
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initPixelPet());
  } else {
    initPixelPet();
  }

  window.PixelPet = PixelPet;
  window.initPixelPet = initPixelPet;
})();
