/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('story_collections', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_collection_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user_collections',
        key: 'id'
      }
    },
    story_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'stories',
        key: 'id'
      }
    }
  }, {
    tableName: 'story_collections'
  });
};
