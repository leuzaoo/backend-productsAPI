function Products(sequelize, DataTypes) {
  return sequelize.define("products", {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: Sequelize.DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: Sequelize.DataTypes.NUMBER,
      allowNull: false,
    },
  });
}

module.exports = Products;
