'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  
  async index() {
    const ctx = this.ctx;
    console.log(ctx.user, 'ctx.user')
    console.log(ctx.isAuthenticated(), 'isAuthenticated')
    if (ctx.isAuthenticated()) {
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <a href="/admin">admin</a>
        </div>
      `;
    }else {
      ctx.redirect('/')
    }
  }

}

module.exports = AdminController;
