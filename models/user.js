/**
 * Created by Ivan Talalaev on 2/13/2017.
 */

module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
    tableName: "Users"
    // ,
    // classMethods: {
    //   associate: function (models) {
    //     User.hasMany(models.Order)
    //   }
    // }
  });
  return User;
};



