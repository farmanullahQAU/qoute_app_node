const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      'inspirational',
      'love',
      'life',
      'friendship',
      'motivational',
      'happiness',
      'wisdom',
      'humor',
      'success',
      'famous',
      'positive',
      'sad',
      'romantic',
    ],
  },
  author: {
    type: String,
  },
  isFromUser: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Quote', QuoteSchema);
