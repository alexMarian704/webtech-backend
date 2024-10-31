import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const register = async (req, res) => {
    const { email, name, password } = req.body;

    try{
        if(!email || !name || !password) {
            return res.status(400).json({ message: "Please provide all fields" });
        }

        if(!email.endsWith('@stud.ase.ro')) {
            return res.status(400).json({ message: "Email must end with @stud.ase.ro" });
        }

        const userExists = await User.findOne({ where: { email } });
        if(userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const hashedPassword = await bycrypt.hash(password, 10);

        const user = await User.create({ email, name, password: hashedPassword });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        return res.status(201).json({ message: "User created", jwt: token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const login = async (req, res) => {
    
};

export { register, login };