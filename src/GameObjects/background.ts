import { GameObject } from "@eva/eva.js";
import { Img } from "@eva/plugin-renderer-img";
import { GAME_SIZE } from '../CONST';
const BackGround = () => {
    const go = new GameObject("background", {
        size: { width: GAME_SIZE.WIDTH, height: GAME_SIZE.HEIGHT },
    });

    go.addComponent(new Img({
        resource: "background"
    }))

    return go
}


export default BackGround