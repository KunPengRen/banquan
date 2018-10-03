const Controller = require('egg').Controller;

class UserController extends Controller{
    async add(){
        const { ctx } = this;
        const name = ctx.params.name;

        this.ctx.body = await ctx.service.user.addUsers(name);
        
    }
};

module.exports = UserController;