function Products(sequelize, DataTypes) {
  return sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
}

module.exports = Products;
