exports.keys ="10086";
exports.security = {
  csrf: { 
    enable: false 
  },
  xframe: {
    enable: false,
  },
};

// 添加 view 配置

  exports.sequelize = {
    dialect: 'mysql',
    host: '39.106.169.68',
    // host: '127.0.0.1',
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: 'toor',
    database: 'banquan',
  };
