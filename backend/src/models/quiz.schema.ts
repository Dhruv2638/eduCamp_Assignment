import mongoose from "mongoose";
import { QuestionSchema } from "./question.schema";

const QuizSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  questions: { type: [QuestionSchema], required: true },
  result: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  createdAt: { type: Date, required: true },
});
