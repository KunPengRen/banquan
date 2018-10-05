'use strict';

module.exports = app => {
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const Mydoc = app.model.define('mydocs',{
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        address:STRING(100),
        user:STRING(100),
        docname:STRING(100),
        time: DATE,
        info:STRING(200),
        hash:STRING(100),
        transaction:STRING(100),
        created_at: DATE,
        updated_at: DATE
    });
    return Mydoc;
};