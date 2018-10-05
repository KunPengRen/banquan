const Controller = require('egg').Controller;

class MydocController extends Controller{
    async uploaddoc(){
        const {ctx} = this;
        console.log(ctx.request.body);
        const body = ctx.request.body;
        var mydoc = {};
        mydoc['address'] = body.address;
        mydoc['user'] = body.user;
        mydoc['docname'] = body.docname;
        mydoc['time'] = body.time;
        mydoc['info'] = body.info;
        mydoc['hash'] = body.hash;
        mydoc['transaction'] = body.transaction;
        this.ctx.body = await ctx.service.mydoc.uploadMydoc(mydoc);
    }
    async mydoclist(){
        const { ctx } = this;
        const address = ctx.params.address;
        console.log(address);
        this.ctx.body = await ctx.service.mydoc.mydocList(address);
    }

};

module.exports =  MydocController;