const Service = require('egg').Service;

class MydocService extends Service{
    async uploadMydoc(mydoc){
        console.log(mydoc);
        var address = mydoc['address'],user=mydoc['user'],docname = mydoc['docname'],time = mydoc['time'],info = mydoc['info'],hash = mydoc['hash'],transaction = mydoc['transaction'];
        await this.ctx.model.Mydoc.create({address,user,docname,time,info,hash,transaction});
        return {"res":true};
    }
    async mydocList(address){
        const mydoclist = await this.ctx.model.Mydoc.findAll({
            where:{
            address:address
            }
        })
        console.log(mydoclist);
        return mydoclist;
    }
};
module.exports = MydocService;