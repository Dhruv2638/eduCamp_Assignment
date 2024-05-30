import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

export const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  diffculty: { type: String, required: true },
});
