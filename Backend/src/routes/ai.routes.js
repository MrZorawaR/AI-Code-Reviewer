const express = require('express');
const router = express.Router();
const generateContent = require('../services/ai.service');
const { genAIController } = require('../controllers/ai.controller');
router.post('/generate',genAIController);

module.exports = router;
