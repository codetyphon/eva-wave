import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
import { GAME_SIZE } from '../CONST';
import { Render } from '@eva/plugin-renderer-render';
import { Direction, WaveAction } from '../Components/Wave';

const WaveFront = () => {
    const go = new GameObject("WaveFront", {
        size: {
            width: 1280,
            height: 140
        },
        origin: { x: 0, y: 0 },
        position: {
            x: 0,
            y: GAME_SIZE.HEIGHT - 100
        },
        scale: {
            x: 2,
            y: 1
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    go.addComponent(
        new Img({
            resource: "wave",
        })
    );

    go.addComponent(
        new Render({
            alpha: 0.3
        })
    )

    go.addComponent(new WaveAction(Direction.left))

    return go;
}
export default WaveFront