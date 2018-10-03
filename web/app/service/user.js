const Service = require('egg').Service;

class UserService extends Service{
    async addUsers(name){
        this.ctx.model.User.create({name});
        return name;
    }
};
module.exports = UserService;