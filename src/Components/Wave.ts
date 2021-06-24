import { GameObject, Transform } from "@eva/eva.js";
import { Component } from "@eva/eva.js";
import { isThisTypeNode } from "typescript";
import { GAME_SIZE } from '../CONST';

export enum Direction {
    left,
    right
}

export class WaveAction extends Component {
    gameObject: GameObject;
    static componentName = "Wave";
    game: any
    direction: Direction

    constructor(direction: Direction) {
        super();
        this.direction = direction
    }

    update() {
        const { x } = this.gameObject.getComponent(Transform).position

        if (this.direction == Direction.left) {
            this.gameObject.getComponent(Transform).position.x -= 6
        }

        if (this.direction == Direction.right) {
            this.gameObject.getComponent(Transform).position.x += 6
        }

        if (x >= 0 && this.direction == Direction.right) {
            this.direction = Direction.left
        }
        if (x <= -1280 * 2 + GAME_SIZE.WIDTH && this.direction == Direction.left) {
            this.direction = Direction.right
        }
    }
}