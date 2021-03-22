const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/graphql';

mongoose.connect(URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('🚀 ~ Connect with database Mongo is done');
});
mongoose.connection.on('error', (error) => {
  console.log(`🚀 ~ ${error}`);
});

module.exports = mongoose;
