const mongoose = require('mongoose');

const port  = process.env.MONGODB_PORT || 27017;
const host  =  process.env.MONGODB_HOST || 'localhost';
const name = process.env.MONGODB_NAME || 'fraudmano';

const uri = `mongodb://${host}:${port}/${name}`;
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongoose;