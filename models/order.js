/**
 * Created by Ivan Talalaev on 2/13/2017.
 */

module.exports = function (sequelize, DataTypes) {
  let Order = sequelize.define('Order', {
    description: {
      type: DataTypes.STRING
    },
    deadLine: {
      type: DataTypes.DATE
    },
    price: {
      type: DataTypes.DECIMAL
    }
  }, {
    classMethods: {
      associate: function (models) {
        Order.belongsTo(models.User, {
          onDelete: "RESTRICT",
          foreignKey: {
            allowNull: true,
            name: "managerId"
          }
        });
        Order.belongsTo(models.User, {
          onDelete: "RESTRICT",
          foreignKey: {
            allowNull: true,
            name: "clientId"
          }
        });
      }
    },
    tableName: "Orders"
  });
  return Order;
};

