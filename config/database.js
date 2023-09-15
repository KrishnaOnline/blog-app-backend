const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Database Connection SUCCESS"))
    .catch((err) => {
        console.log("Database Connection ERROR")
        console.log(err.message)
        process.exit(1);
    })
};

module.exports = dbConnect;