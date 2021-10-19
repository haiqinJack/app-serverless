const Service = require('egg').Service;
``
class UserService extends Service { 
  /**
   * 
   * @param {string} username 用户名 
   * @returns {Promise<{id:string,username:string,password:string}>} 返回创建的User
   */ 
  async findOne(username) {
    return await this.ctx.model.User.findOne({where: {username}, attributes: ['id', 'username', 'password']});
  }

  async create(user) {
    return await this.ctx.model.User.create(user);
  }
}

module.exports = UserService;
