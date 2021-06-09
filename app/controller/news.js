const { Controller } = require('egg');

class NewsController extends Controller {
  // 一般控制器只会处理请求的参数和返回的响应
  async index () {
    console.log('hhhh')
    let { ctx } = this;
    // 后端渲染
    // let news = [{title:'ddd',url:'xxx'}]
    let news = await this.ctx.service.news.fetch()

    await ctx.render('news.ejs',{news})
  }
}

module.exports = NewsController