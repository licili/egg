// 声明key，给cookie加密使用
exports.keys = 'hhh'
// 模板引擎
exports.view = {
  defaultViewEngine: 'ejs',
  mapping: {
    '.ejs':'ejs'
  }
}

exports.middleware = [
  'time'
]
exports.time = {
  name:'总耗时'
}

// 变量
exports.news = {
  url:'https://nba.hupu.com/'
}