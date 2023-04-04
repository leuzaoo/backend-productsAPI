const Sequelize = require("sequelize");
const Products = require("../models/Products");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

Products(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Products: Products(sequelize, Sequelize.DataTypes),
};
