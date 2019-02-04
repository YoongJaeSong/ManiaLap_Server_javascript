/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    story_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'stories',
        key: 'id'
      }
    },
    section_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sections',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'Contents'
  });
};
