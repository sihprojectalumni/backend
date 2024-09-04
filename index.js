import express from 'express';
import signUp from './routes/signUp.js';

const port = 8001;
const app = express();
app.use(express.json());


app.use('/signup', signUp);


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
}) 