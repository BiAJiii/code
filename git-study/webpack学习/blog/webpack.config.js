const path = require("path");//获得webpack.config.js当前路径
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;//BundleAnalyzerPlugin是对象，需要调用里面的构造函数所以加.BundleAnalyzerPlugin

module.exports = {
    mode: "development",//开发者模式，方便修改
    entry: "./src/index.js",//入口文件路径
    devtool:"inline-source-map",//方便查看打包后的源代码
    output: {
        filename: "dist.js",//配置打包后的文件名
        path:path.resolve(__dirname, "dist"),//更改存放目录,__dirname指的是当前文件所在文件夹的绝对路径。
    },
    optimization: {
        minimize:true,
        minimizer:[new TerserPlugin()],
    },
    devServer:{
        static:"./dist",
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Blog!"
        }),
        new BundleAnalyzerPlugin(),
    ],
    module:{
        rules:[{
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
        },{
            test: /\.(PNG|JPG|GIF|SVG)$/i,
            type:"asset/resource",
            use: ["url-loader","file-loader"]
        },{
            test:/\.js&/,
            exclude:/node_modules/,
            use:{
                loader: "babel-loader",//使用对象形式，方便给loader传递自定义配置
                options:{
                    presets:["@babel/preset-env"],//自定义配置
                },
            }
        }
        ],//数组中每个元素对应一个loader配置
    }
};