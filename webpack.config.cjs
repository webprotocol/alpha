module.exports = {
    mode: "development",
    entry: {
        fill: "./src/fill.jsx",
        sort: "./src/sort.jsx",
        move: "./src/move.jsx",
        flow: "./src/flow.jsx",
        ping: "./src/ping.jsx",
     },
    output: {
        filename: "[name].js",
        path: __dirname + "/src/main/webapp/js/react"
    },
   devtool: 'eval-source-map',
   module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

};
