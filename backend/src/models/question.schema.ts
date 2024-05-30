import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

export const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  category: { type: String, required: true }, // e.g. "Science, Computers, History, Politics, Art, etc."
});
