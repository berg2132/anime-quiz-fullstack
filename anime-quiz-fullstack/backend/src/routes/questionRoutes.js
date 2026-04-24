const express = require('express');
const router = express.Router();
const {
  listQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestions
} = require('../controllers/questionController');

// Rota especial para perguntas aleatórias (antes do /:id)
router.get('/random', getRandomQuestions);

router.get('/', listQuestions);
router.get('/:id', getQuestionById);
router.post('/', createQuestion);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

module.exports = router;
