/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creators', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    brand_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    profile_image_url: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    insta_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true
    },
    fb_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true
    },
    youtube_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true
    },
    web_url: {
      type: DataTypes.STRING(200),
      allowNull: true,
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
    register_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    register_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    tableName: 'creators'
  });
};
