import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Tag = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Tag;