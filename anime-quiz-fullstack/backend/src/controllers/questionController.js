const Question = require('../models/Question');

async function listQuestions(req, res) {
  try {
    const { anime, difficulty } = req.query;
    const filter = {};
    if (anime) filter.anime = { $regex: anime, $options: 'i' };
    if (difficulty) filter.difficulty = difficulty;

    const questions = await Question.find(filter).sort({ createdAt: -1 });
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar perguntas.', error: error.message });
  }
}

async function getQuestionById(req, res) {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar pergunta.', error: error.message });
  }
}

async function createQuestion(req, res) {
  try {
    const { question, options, answer, anime, difficulty, imageUrl } = req.body;

    if (!question || !options || answer === undefined || !anime) {
      return res.status(400).json({ message: 'question, options, answer e anime são obrigatórios.' });
    }

    const newQuestion = await Question.create({ question, options, answer, anime, difficulty, imageUrl });
    return res.status(201).json({ message: 'Pergunta criada com sucesso.', question: newQuestion });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar pergunta.', error: error.message });
  }
}

async function updateQuestion(req, res) {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!question) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }

    return res.status(200).json({ message: 'Pergunta atualizada com sucesso.', question });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar pergunta.', error: error.message });
  }
}

async function deleteQuestion(req, res) {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Pergunta não encontrada.' });
    }
    return res.status(200).json({ message: 'Pergunta removida com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao remover pergunta.', error: error.message });
  }
}

// Retorna perguntas aleatórias para o quiz
async function getRandomQuestions(req, res) {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const questions = await Question.aggregate([{ $sample: { size: limit } }]);
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar perguntas.', error: error.message });
  }
}

module.exports = {
  listQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getRandomQuestions
};
