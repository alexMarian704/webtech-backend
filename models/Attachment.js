import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Note from './Note.js';

const Attachment = sequelize.define('Attachment', {
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'file_name',
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'file_path',
  },
  fileType: {
    type: DataTypes.STRING,
    field: 'file_type',
  },
  uploadedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'uploaded_at',
  },
});

Attachment.belongsTo(Note, { foreignKey: 'note_id', as: 'note' });
Note.hasMany(Attachment, { foreignKey: 'note_id', as: 'attachments' });

export default Attachment;