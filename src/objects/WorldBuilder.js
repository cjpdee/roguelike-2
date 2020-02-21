export class WorldBuilder {
    constructor() {
        this.worldSize = 10;
    }

    render(scene) {
        const display = document.getElementById("game-display");
        display.innerHTML = "";

        scene.map(sceneRow => {
            let rowEl = document.createElement("span");
            sceneRow.map(cell => {
                rowEl.appendChild(cell);
            });
            display.appendChild(rowEl);
        });
    }

    generateBlankWorld() {
        let world = [];
        for (let i = 0; i < this.worldSize; i++) {
            let row = [];
            for (let j = 0; j < this.worldSize; j++) {
                let btn = document.createElement("button");
                btn.setAttribute("data-y", j);
                btn.setAttribute("data-x", i);
                row.push(btn);
            }
            world.push(row);
        }
        return world;
    }

    setWorldSize(size) {
        this.worldSize = size;
    }

    exportWorld() {
        // console.log(world);
    }
}
