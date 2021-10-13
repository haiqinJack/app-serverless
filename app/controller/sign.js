'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  async create() {
    const {ctx, app} = this;
    const data = ctx.request.body;
    console.log(data, 'data')
    const token = app.jwt.sign(data, app.config.jwt.secret)
    console.log(token, 'token')
    ctx.body = {
        msg: 'success',
        code: 1,
        token
    }
  }
}

module.exports = SignController;
