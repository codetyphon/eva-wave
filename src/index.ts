import {
  resource,
  Game,
  LOAD_SCENE_MODE,
  Scene,
} from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { TextSystem } from '@eva/plugin-renderer-text';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { PhysicsSystem } from '@eva/plugin-matterjs';
import { TilingSpriteSystem } from '@eva/plugin-renderer-tiling-sprite';
import { Sound, SoundSystem } from '@eva/plugin-sound';
import Res from './res';
import { GAME_SIZE } from './CONST';
import BackGround from './GameObjects/background';
import WaveFront from './GameObjects/wave-front';
import WaveBack from './GameObjects/wave-back';
import Land from './GameObjects/land';

resource.addResource(Res);

const game = new Game({
  autoStart: false,
  frameRate: 70, // Compatible with Eva's own bug, the frame rate must be greater than 60
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: GAME_SIZE.WIDTH,
      height: GAME_SIZE.HEIGHT,

      // antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
    new GraphicsSystem(),
    new EventSystem(),
    new SoundSystem(),
    new PhysicsSystem({
      resolution: window.devicePixelRatio / 2, // 保持RendererSystem的resolution一致
      isTest: false, // 是否开启调试模式
      element: document.getElementById('container'), // 调试模式下canvas节点的挂载点
      world: {
        gravity: {
          y: 0, // 重力
        },
      },
    }),
    new TilingSpriteSystem(),
  ],
});

// game.scene.transform.size.width = GAME_SIZE.WIDTH
// game.scene.transform.size.height = GAME_SIZE.HEIGHT

const scene = new Scene('game');

game.loadScene({
  scene,
  type: LOAD_SCENE_MODE.SINGLE,
} as any);

scene.addChild(BackGround());
// scene.addChild(Land());
scene.addChild(WaveFront());
scene.addChild(WaveBack());

game.start();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    game.pause();
  } else {
    game.resume();
  }
});

