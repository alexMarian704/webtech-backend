import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './models/index.js';
import authRoutes from './routes/authRoutes.js';
import authenticateToken from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin: '*'}));

app.use(express.json());

app.use('/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("Running");
})

sequelize.authenticate()
    .then(() => {
        console.log("Connected to database");
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Conneted");
        })
    })
    .catch((err) => {
        console.log(err);
    })