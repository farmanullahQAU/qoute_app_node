const Quote = require('../models/quoteModel');

// Save a new quote
exports.createQuote = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log the request body
    if (!req.body) {
      return res.status(400).json({ message: 'No request body' });
    }

    const { text, category, author, isFromUser } = req.body;
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const newQuote = new Quote({
      text,
      category,
      author,
      isFromUser,
    });

    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error error', err: error });
  }
};


// Get all quotes with pagination
exports.getQuotes = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const quotes = await Quote.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Quote.countDocuments();
    res.json({
      quotes,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error:', error); // Log the error
    res.status(500).json({ message: 'Server Error' });
  }
};
