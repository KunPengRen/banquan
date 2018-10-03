'use strict';

module.exports = app => {
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const User = app.model.define('users',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name:STRING(100),
        created_at: DATE,
        updated_at: DATE
    });
    return User;
};