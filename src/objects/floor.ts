import k, { FLOOR_HEIGHT } from "../kaboom";

export const makeFloor = () => {
    const floor = k.make([
        k.rect(k.width(), FLOOR_HEIGHT),
        k.outline(4),
        k.pos(0, k.height()),
        k.anchor("botleft"),
        k.area(),
        k.body({ isStatic: true }),
        k.color(127, 200, 255),
    ]);

    return floor;
}