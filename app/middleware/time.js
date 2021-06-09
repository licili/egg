module.exports = (options, app) => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    console.log(options.name + (Date.now()-start) + 'ms')
  }
}