import express from 'express';
import signUp from './routes/signUp.js';
import signIn from './routes/signIn.js';

const port = 8001;
const app = express();
app.use(express.json());


app.use('/signup', signUp);
app.use('/signin', signIn);


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
}) 