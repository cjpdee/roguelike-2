import { Game } from "./objects/Game";
import { WorldBuilder } from "./objects/WorldBuilder";

// Just getting it to render stuff

new Game().render([
    [{ sprite: "1" }, { sprite: "0" }, { sprite: "0" }],
    [{ sprite: "0" }, { sprite: "1" }, { sprite: "0" }],
    [{ sprite: "0" }, { sprite: "0" }, { sprite: "1" }]
]);

document.getElementById("game").addEventListener("click", () => {
    new Game().render([
        [{ sprite: "1" }, { sprite: "0" }, { sprite: "0" }],
        [{ sprite: "0" }, { sprite: "1" }, { sprite: "0" }],
        [{ sprite: "0" }, { sprite: "0" }, { sprite: "1" }]
    ]);
});
document.getElementById("builder").addEventListener("click", () => {
    let builder = new WorldBuilder();
    builder.render(builder.generateBlankWorld());
});
