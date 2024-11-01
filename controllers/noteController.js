import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Tag from '../models/Tag.js';

dotenv.config();

const addNote = async (req, res) => {

}

const getNotes = async (req, res) => {

}

const deleteNote = async (req, res) => {

}

const addTag = async (req, res) => {
    try {
        const { name } = req.body;
    
        if (!name || name.trim() === '') {
          return res.status(400).json({ error: 'Tag name is required' });
        }
    
        const [tag, created] = await Tag.findOrCreate({
          where: { name },
        });
    
        if (created) {
          return res.status(201).json({ message: 'Tag created successfully', tag });
        } else {
          return res.status(200).json({ message: 'Tag already exists', tag });
        }
      } catch (error) {
        console.error('Error adding tag:', error);
        return res.status(500).json({ error: 'An error occurred while adding the tag' });
      }
}

const getTags = async (req, res) => {

}

export { addTag, addNote, getTags, getNotes, deleteNote };