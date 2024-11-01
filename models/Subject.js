import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Subject = sequelize.define('Subject', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
    },
})

export default Subject;