const Service = require('egg').Service;

class CategoriesService extends Service {
  async create(category) {
    const ctx = this.ctx;
    const result = await ctx.model.Categories.create(category);
    // 返回创建的 user
    return result.toJSON();
  }
}

module.exports = CategoriesService;
