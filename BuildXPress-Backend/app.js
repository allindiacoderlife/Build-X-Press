const express = require('express');
const connectDB = require('./api/db')
const Auth = require('./routes/auth');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;

connectDB();
app.use(express.json());

app.use('/', Auth); // Auth routes


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on ${port} `);
})