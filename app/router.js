  // app 整个应用的意思
  // egg.js 是基于Koa封装的一个上级框架
  // egg里面很多约定好的东西
module.exports = (app) => {
  // router 就是路由中间件的router实例。可以在它身上定义路由规则
  // controller 控制器容器
  // app.get('/',function(){}) function(){} 这个就类似于控制器
  const { router, controller } = app;
  // get是HTTP的方法名。controller是一个对象。他是如何声明和创建呢？
  // controller是一个对象。它的属性就是那个文件下的文件。作为它的属性名
  // controller.home.index 会自动找到controller下的home.js 的index方法
  // => 1. controller={} 2. let home=new HomeController() 3.controller.home=home
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
}