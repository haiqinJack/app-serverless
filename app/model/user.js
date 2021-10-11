'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(30),
    provider: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  }, 
  {
      timestamps: false,
      // freezeTableName: true
  }
  );

  return User;
};
