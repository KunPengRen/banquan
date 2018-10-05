const Controller = require('egg').Controller;

class UserController extends Controller{
    async ishave(){
        const {ctx} = this;
        const address = ctx.params.address;
        this.ctx.body = await ctx.service.user.isHave(address);
    }
    async adduser(){
        const { ctx } = this;
        console.log(ctx.request.body);
        const body = ctx.request.body;
        var user = {};
        user["address"] = body.address;
        user['name'] = body.name;
        user['username'] = body.username;
        user['phone'] = body.phone;
        user['mail'] = body.mail;
        user['identify'] = body.identify;
        this.ctx.body = await ctx.service.user.addUser(user);
        
    }

};

module.exports = UserController;