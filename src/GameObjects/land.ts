import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { GAME_SIZE } from '../CONST';
import { Render } from '@eva/plugin-renderer-render';
import { WaveAction, Direction } from '../Components/Wave';

const Land = () => {
    const go = new GameObject("WaveFront", {
        size: {
            width: GAME_SIZE.WIDTH,
            height: GAME_SIZE.WIDTH / 640 * 416
        },
        origin: { x: 0.5, y: 0 },
        position: {
            x: GAME_SIZE.WIDTH / 2,
            y: GAME_SIZE.HEIGHT - GAME_SIZE.WIDTH / 640 * 416
        },
        scale: {
            x: 1,
            y: 1
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    go.addComponent(
        new Img({
            resource: "land",
        })
    );

    return go;
}
export default Land