'use strict';

module.exports = app => {
  const { STRING, UUID } = app.Sequelize;

  const Categroies = app.model.define('categroies', {
    id: { type: UUID, primaryKey: true},
    name: STRING(30),
    sort: STRING(8),
    category_image_url: STRING,
  })

  return Categroies;
};
