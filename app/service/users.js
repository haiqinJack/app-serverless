const Service = require('egg').Service;
``
class UserService extends Service {  
  async create(user) {
    const ctx = this.ctx;
    const result = await ctx.model.User.create(user);
    // 返回创建的 user
    return result.toJSON();
  }
}

module.exports = UserService;
