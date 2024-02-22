import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize.js';
import Movies from './Movies.js';

class Categories extends Model {}

Categories.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'categories',
    modelName: 'categories',
  },
);

Categories.belongsTo(Movies, {
  foreignKey: 'movieId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'movies',
});

Movies.hasMany(Categories, {
  foreignKey: 'movieId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'categories',
});

Movies.hasOne(Categories, {
  foreignKey: 'movieId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'categorie',
});

export default Categories;
