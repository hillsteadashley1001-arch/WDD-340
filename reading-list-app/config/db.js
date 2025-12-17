/**
 * MongoDB connection
 */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});
