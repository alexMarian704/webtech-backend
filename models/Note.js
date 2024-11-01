import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import User from './User.js';
import Subject from './Subject.js';

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'updated_at',
  },
});

Note.belongsTo(User, { foreignKey: 'user_id', as: 'author' });
User.hasMany(Note, { foreignKey: 'user_id', as: 'notes' });

Note.belongsTo(Subject, { foreignKey: 'subject_id', as: 'subject' });
Subject.hasMany(Note, { foreignKey: 'subject_id', as: 'notes' });

export default Note;
