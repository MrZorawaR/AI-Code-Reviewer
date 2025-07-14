const generateContent = require("../services/ai.service");

const genAIController =  async (req, res) => {
    const {code} = req.body;
    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }
    const response = await generateContent(code);
    res.json({ response });
}

module.exports = {
    genAIController
};
