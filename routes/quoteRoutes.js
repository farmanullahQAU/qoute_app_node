const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.post('/quotes', quoteController.createQuote);
router.get('/quotes', quoteController.getQuotes);

module.exports = router;
