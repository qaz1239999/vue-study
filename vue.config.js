const path = require("path");
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  //输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  //eslint-loader是否在保存的时候进行检查
  lintOnSave: false,
  /**
   * webpack配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/
   */
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    // config.resolve = { //配置解析别名
    // 	extensions: ['.js','.json','.vue'],
    // 	alias: {
    // 		'@': path.resolve(__dirname,'./src'),
    // 		'public': path.resolve(__dirname,'./public'),
    // 		'components': path.resolve(__dirname,'./src/components'),
    // 		'common': path.resolve(__dirname,'./src/common'),
    // 		'api': path.resolve(__dirname,'./src/api'),
    // 		'views': path.resolve(__dirname,'./src/views'),
    // 		'data': path.resolve(__dirname,'./src/data')
    // 	}
    // }
  },
  //生产环境是否生成sourceMap文件
  productionSourceMap: false,
  //css相关配置
  css: {
    //是否使用css分离插件ExtractTestPlugin
    extract: true,
    //开启CSS source maps?
    sourceMap: false,
    //css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
    //启用CSS modules for all css / pre-processor files
    requireModuleExtension: false,
  },
  //use thread-loader for babel & TS in production build
  //enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  /**
   * PWA插件相关配置 https://github.com/vuejs/vue0cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  //webpack-dev-server相关配置
  devServer: {
    open: false, //编译完成是否打开网页
    host: "0.0.0.0", //指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: "8080", //访问端口
    https: false, //编译失败时刷新页面
    hot: true, //热加载
    hotOnly: false,
    proxy: null, //设置代理
    overlay: {
      //全屏模式下是否显示脚本错误
      warnings: true,
      errors: true,
    },
    before: (app) => {},
  },
  /**
   * 第三方配置
   */
  pluginOptions: {},
};
