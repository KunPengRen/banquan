'use strict';

module.exports = app => {
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const User = app.model.define('users',{
        address: { type: STRING(100), primaryKey: true },
        name:STRING(100),
        username:STRING(100),
        phone:STRING(100),
        mail:STRING(100),
        identify:STRING(100),
        created_at: DATE,
        updated_at: DATE
    });
    return User;
};