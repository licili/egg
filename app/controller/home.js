const { Controller } = require('egg');

class HomeController extends Controller {
  async index () {
    this.ctx.body = 'hello worlddd'
  }
}

module.exports = HomeController