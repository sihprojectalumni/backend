import express from 'express';

const port = 8001;
const app = express();


app.get('/' , (req , res) => {
    res.send('Request received');
})


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
}) 