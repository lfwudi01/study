const path = require("path");

module.exports = {
    //输入
    entry:"./src/main.js",
    //输出
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"main.js",
    },
    //加载器
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
    },
    //插件
    plugins:[

    ],
    //模式
    mode:"development",
};