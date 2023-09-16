const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const blog = require('./routes/blog');

// app.use('/api/v1', blog);

app.listen(PORT, () => {
    console.log(`Server Started at Port:${PORT}`);
})

app.get('/', (req, res) => {
    res.send(`<h1>This is HOMEPAGE</h1>`);
})

const dbConnect = require('./config/database');
dbConnect();