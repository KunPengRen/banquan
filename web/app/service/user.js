const Service = require('egg').Service;

class UserService extends Service{
    async isHave(address){
        const user = await this.ctx.model.User.findOne({
            where:{
                address:address
            }
        });
        console.log('hello world');
        console.log(user);
        if(user){
            return user;
        }
        else{
            return {"res":false}
        }
        
    }
    async addUser(user){
        console.log(user);
        var address=user['address'],name=user['name'],username=user['username'],phone=user['phone'],mail=user['mail'],identify=user['identify'];
        this.ctx.model.User.create({address,name,username,phone,mail,identify});
        return {"res":true};
    }
};
module.exports = UserService;