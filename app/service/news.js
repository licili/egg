const { Service } = require('egg');
const moment = require('moment')

class NewsService extends Service {

  // eggjs 内置了一个方法。用来读取远程的接口数据 this.ctx.curl
  // result = {headers,data}
  // 简单爬虫。真正爬虫不是这些的

  // config 属性是this的属性
  // service是this.ctx的属性
  async fetch () {
      console.log('???')
    let { data } = await this.ctx.curl(this.config.news.url);
    data = data.toString();

    let news = [];
    // let reg = /<li[^>]+><a[^>]+href\s*=\s*['\"]([^'\"]+)['\"][^>]*>([\s\S]+?)<\/a>\s*<\/li>/g
    // let reg = /<h3[^>]+>\s*<a[^>]+href\s*=\s*['\"]([^'\"]+)['\"][^>]*>([\s\S]+?)<\/a>\s*<\/h3>/g
    // 匹配a标签里面的内容
    let reg = /<a[^>]+href\s*=\s*['\"]([^'\"]+)['\"][^>]*>([\s\S]+?)<\/a>/g
    data.replace(reg, function (matched, url, title) {
      title = title.trim();
      if (title.includes('img')
        || title.length < 20
        || title.includes('div')
        || title.includes('li')
        || title.includes('span')
        || title.includes('i')) {
        return;
      };
      news.push({
        title,
        url,
        // time:moment(new Date()).fromNow()
        time:new Date()
      })
    })
    // console.log(news)
    return news;
  }
}

module.exports = NewsService;