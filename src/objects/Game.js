// handle keybind assignment
// dependent on ui

export class Game {
    constructor() {
        this.session = 1;
    }

    rng() {
        return Math.random() * 100;
    }

    setKeybindings(keymap) {
        this.keymap = keybindMap;
    }

    render(scene) {
        const display = document.getElementById("game-display");
        display.innerHTML = "";

        scene.map(sceneRow => {
            let rowEl = document.createElement("span");
            let row = "";
            sceneRow.map(cell => {
                row = row + cell.sprite;
            });

            rowEl.textContent = row;
            display.appendChild(rowEl);
        });
    }
}

// const exampleKeymap = {
//     a: moveWest(Player, 1),
//     s: moveSouth(Player, 1),
//     S: searchTile(Player.x, Player.y)
// };

// const menuKeymap = {
//     e: equipItem(Player, item)
// };
