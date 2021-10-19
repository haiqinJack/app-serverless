'use strict';

const { Controller } = require('egg');

class AdminController extends Controller {
  
  async index() {
    const ctx = this.ctx;
    ctx.body = {
      name: 'admin'
    };
  }

}

module.exports = AdminController;
