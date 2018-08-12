'use strict';
module.exports = (sequelize, DataTypes) => {

  var priority = sequelize.define('priority', {
    priority_name: DataTypes.STRING
  }, {
    timestamps: true,
    createdAt : 'created_at',
    updatedAt: 'updated_at'
  });
  priority.associate = function(models) {
    // associations can be defined here
  };

  return priority;
};