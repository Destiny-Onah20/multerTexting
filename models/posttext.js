'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postText extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postText.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    postImage: DataTypes.STRING,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postText',
  });
  return postText;
};