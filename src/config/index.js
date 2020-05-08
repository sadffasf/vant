const CONFIG = {
  //开发环境配置
  development: {
    assetsPath: 'https://sol-test.fdcyun.com',// 静态资源路径
    baseUrl: 'https://sol-test.fdcyun.com',//接口地址
    webviewUrl: 'https://m-test.mingyuanyun.com/sol',//webViewer域名地址
    socketUrl:'wss://121.41.38.36:9901/mwebsocket', //  //10.5.10.71:9901/message   https://sol-test.fdcyun.com/message/info
    tokenKey: "WECHAT_TRADE", // 登录标识
  },
  //生产环境配置
  production: {
    assetsPath: "https://sol.fdcyun.com", // 静态资源路径
    baseUrl: "https://sol.fdcyun.com",
    webviewUrl: 'https://m.mingyuanyun.com/sol',//webViewer域名地址
    socketUrl:'//sol-test.fdcyun.com/message/info',
    tokenKey: "WECHAT_TRADE", // 登录标识
  }
}
export default CONFIG[process.env.NODE_ENV];
