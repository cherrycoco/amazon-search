const db = require('./Database/index.js');
const redis = require('./Database/redis.js');
const Router = require('koa-router');
// const worker = require('./background-worker.js');

module.exports = {
  search: {
    get: async (ctx) => {
      try {
        let page = Number(ctx.params.page);
        let query = ctx.query.query.split(' ').join('%20');
        let url = `/${page}?query=${query}`;
        let res = await redis.get(url, ctx.query.query, page);
        ctx.body = res;
        // worker.addMessage(url);
      } catch (err) {
        console.log('error from search get', err);
      }
    },

    post: async (ctx) => {
      let productId = ctx.params.productId;
      let body = ctx.request.body;
      let res = await db.indexProduct(productId, body)
      ctx.body = res;

    },

    delete: async (ctx) => {
      let productId = ctx.params.productId;
      let res = await db.deleteProduct(productId)
      ctx.body = res;
    }
  }
}