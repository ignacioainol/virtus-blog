import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import postRouter from './routes/posts.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db')
}).catch(err => {
    console.log(err.message)
});

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/posts', postRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});