export class Tile {
    constructor(sprite, walkable, breakable, durability, damage) {
        this.sprite = sprite;
        this.walkable = walkable;
        this.breakable = breakable;
        this.durability = durability;
        this.damage = damage;
    }
}

export const OW_WALL_TILE = () => new Tile("🌳", false, true, 100, 0);
export const OW_FLOOR_TILE = () => new Tile("⬜", true, false, 0, 0);
export const DG_WALL_TILE = () => new Tile("🌳", false, true, 100, 0);
export const DG_FLOOR_TILE = () => new Tile("⬜", true, false, 0, 0);
