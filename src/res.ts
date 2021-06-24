import { RESOURCE_TYPE } from "@eva/eva.js"

const Res = [
    {
        name: "background",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/background-stage0.png",
            },
        },
        preload: true,
    },
    {
        name: "wave",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/wave.png",
            },
        },
        preload: true,
    },
    {
        name: "land",
        type: RESOURCE_TYPE.IMAGE,
        src: {
            image: {
                type: "png",
                url: "assets/land.png",
            },
        },
        preload: true,
    }
]
export default Res