module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/api/v1/dev/ishave/:address', controller.user.ishave);
    router.post('/api/v1/dev/adduser',controller.user.adduser);
    router.post('/api/v1/dev/uploaddoc',controller.mydoc.uploaddoc);
    router.get('/api/v1/dev/mydoclist/:address', controller.mydoc.mydoclist);
    
    
  };