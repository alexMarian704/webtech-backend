import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Note from './Note.js';
import Tag from './Tag.js';

const NoteTag = sequelize.define('NoteTag', {}, { timestamps: false });

Note.belongsToMany(Tag, {
  through: NoteTag,
  foreignKey: 'note_id',
  otherKey: 'tag_id',
  as: 'tags',
});

Tag.belongsToMany(Note, {
  through: NoteTag,
  foreignKey: 'tag_id',
  otherKey: 'note_id',
  as: 'notes',
});

export default NoteTag;