'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  async create() {
    const {ctx, app} = this;
    const {username, password} = ctx.request.body;
    const _user = await ctx.service.users.findOne({username, password});
    if(_user) {
      const token = app.jwt.sign({
        id: _user.id,
        username: _user.username,
        provider: _user.token
      }, app.config.jwt.secret)
      ctx.body = {
          msg: 'success',
          code: 1,
          token
      }
    }else {
      ctx.body = {
        msg: 'fail',
        code: 0
      }
    }
  }
}

module.exports = SignController;
