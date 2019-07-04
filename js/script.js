import {App} from 'https://codepen.io/ycw/pen/yWdXpN.js';
console.clear();

const $ = new App();
class Psy0 extends $.Psy {
  constructor({nPtc=100, scale=1}={}) {
    super({nPtc});
    this.scale = scale;
  }
  buildTexture(graphic) {
    graphic.beginFill(0xffffff, 1);
    graphic.drawRect(0, 0, this.scale, this.scale);
    graphic.endFill();
  }
  recycle(sprite, isFirstRun) {
    const {width, height} = sprite.getBounds();
    if (isFirstRun) {
      sprite.position.y = Math.random() * innerHeight;
      sprite.anchor.set(0.5, 0.5);
      sprite.angle = Math.random() * 360;
    } else {
      sprite.position.y = -height*2;
    }
    sprite.position.x = Math.random() * innerWidth;
    sprite.tint = Math.random()*0xffffff;
    sprite.scale.set(Math.random());
    sprite.$w = 0.2 + Math.random() * 0.2;
    sprite.$vy = (0.4 + Math.random() * 0.6) * 2;
    sprite.$vx = (-0.5 + Math.random())*0.2;
  }
  update() {
    for (const sprite of this.container.children) {
      sprite.angle += sprite.$w;
      sprite.position.y += sprite.$vy;
      sprite.position.x += sprite.$vx;
      const {y, x, width} = sprite.getBounds();
      if (y > innerHeight || x < -width || x > innerWidth) {
        this.recycle(sprite);
      }
    }
  }
}

// ----- mutli systems ------
const blurFilter = new PIXI.filters.BlurFilter(10);
// ----- sys 1
const psy0 = new Psy0({scale:10, nPtc:500}); 
psy0.container.filters = [ blurFilter ];
$.regPsy(psy0);
// ----- sys2
const psy0b = new Psy0({scale:10, nPtc:200});
$.regPsy(psy0b);