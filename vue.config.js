//production 生产环境
// 导入compression-webpack-plugin
//const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
//const productionGzipExtensions = ['js', 'css']

module.exports = {
    //baseUrl:'./',//废弃
    publicPath: './',
    outputDir: 'dist', // 'dist', 生产build环境构建文件的目录
    assetsDir: 'assets',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
    //indexPath:'myIndex.html' //默认index.html 相对于outputDir
    // pages: {
    //     console: {
    //         // 应用入口配置，相当于单页面应用的main.js，必需项
    //         entry: 'src/views/pages/console/console.js',

    //         // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
    //         template: 'public/console.html',

    //         // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
    //         filename: 'console.html',

    //         // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
    //         // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'console page',

    //         // 包含的模块，可选项
    //         chunks: ['console']
    //     },
    //     // 只有entry属性时，直接用字符串表示模块入口
    //     client: 'src/views/pages/client/client.js'
    // }, //多页面设置
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: false,//是否使用包含运行时编译器的 Vue 构建版本
    transpileDependencies: [],//默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    chainWebpack: () => { },
    configureWebpack: config => {

    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hot: false,//热更新：模块代码变化，hot 和 hotOnly区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
        hotOnly: true,//热更新：模块代码变化，刷新页面
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3001',
                ws: true,
                changOrigin: true
            }
        },
        before: app => { }
    }
}