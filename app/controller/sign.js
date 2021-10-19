'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  async create() {
    const {ctx, app} = this;
    const {username, password} = ctx.request.body;
    const _user = await ctx.service.users.findOne(username);
    if(!_user) {
      ctx.status = 403;
      ctx.body = {
        code: 403,
        message: "username or password wrong"
      };
    }else {
      if(_user.password === ctx.helper.encryptPwd(password)) {
        const token = app.jwt.sign({
          id: _user.id,
          username: _user.username,
          password: _user.password
        }, app.config.jwt.secret);
        ctx.status = 200;
        ctx.body = {
            msg: 'success',
            code: 0,
            token
        }

      }else {
        ctx.status = 403;
        ctx.body = {
          code: 403,
          message: "username or password wrong"
        };
      }
    }
  }
}

module.exports = SignController;
