const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 6969
    }
};
