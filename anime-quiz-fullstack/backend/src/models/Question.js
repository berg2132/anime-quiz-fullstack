const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length === 4,
        message: 'Uma pergunta deve ter exatamente 4 opções.'
      }
    },
    answer: {
      type: Number,
      required: true,
      min: 0,
      max: 3
    },
    anime: {
      type: String,
      required: true,
      trim: true
    },
    difficulty: {
      type: String,
      enum: ['facil', 'medio', 'dificil'],
      default: 'medio'
    },
    imageUrl: {
      type: String,
      trim: true,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Question', questionSchema);
