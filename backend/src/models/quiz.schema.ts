import mongoose from "mongoose";
import { QuestionSchema } from "./question.schema";
const QuizSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  questions: { type: [QuestionSchema], required: true },
});
