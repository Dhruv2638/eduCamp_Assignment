import mongoose, { model } from 'mongoose';
import { connectDB } from "../config/db/database"
import { QuestionSchema } from '../models/question.schema';

const Question = model('Question', QuestionSchema);

const addQuestions = async () => {
    const questionList = [
        {
            questionText: 'What is the capital of France?',
            options: [
                { text: 'Paris', isCorrect: true },
                { text: 'London', isCorrect: false },
                { text: 'Berlin', isCorrect: false },
                { text: 'Madrid', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Geography',
        },
        {
            questionText: 'Who wrote "To Kill a Mockingbird"?',
            options: [
                { text: 'Harper Lee', isCorrect: true },
                { text: 'Mark Twain', isCorrect: false },
                { text: 'J.K. Rowling', isCorrect: false },
                { text: 'Ernest Hemingway', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Literature',
        },
        {
            questionText: 'What is the square root of 64?',
            options: [
                { text: '8', isCorrect: true },
                { text: '6', isCorrect: false },
                { text: '7', isCorrect: false },
                { text: '9', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Maths',
        },
        {
            questionText: 'In which year did the Titanic sink?',
            options: [
                { text: '1912', isCorrect: true },
                { text: '1905', isCorrect: false },
                { text: '1918', isCorrect: false },
                { text: '1921', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'History',
        },
        {
            questionText: 'What is the chemical symbol for Gold?',
            options: [
                { text: 'Au', isCorrect: true },
                { text: 'Ag', isCorrect: false },
                { text: 'Fe', isCorrect: false },
                { text: 'Pb', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Chemistry',
        },
        {
            questionText: 'What is the longest river in the world?',
            options: [
                { text: 'Nile', isCorrect: true },
                { text: 'Amazon', isCorrect: false },
                { text: 'Yangtze', isCorrect: false },
                { text: 'Mississippi', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Geography',
        },
        {
            questionText: 'Who discovered penicillin?',
            options: [
                { text: 'Alexander Fleming', isCorrect: true },
                { text: 'Marie Curie', isCorrect: false },
                { text: 'Isaac Newton', isCorrect: false },
                { text: 'Albert Einstein', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Science',
        },
        {
            questionText: 'What is the capital of Australia?',
            options: [
                { text: 'Canberra', isCorrect: true },
                { text: 'Sydney', isCorrect: false },
                { text: 'Melbourne', isCorrect: false },
                { text: 'Brisbane', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Geography',
        },
        {
            questionText: 'In what year did the Berlin Wall fall?',
            options: [
                { text: '1989', isCorrect: true },
                { text: '1985', isCorrect: false },
                { text: '1991', isCorrect: false },
                { text: '1993', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'History',
        },
        {
            questionText: 'What is the freezing point of water?',
            options: [
                { text: '0°C', isCorrect: true },
                { text: '32°C', isCorrect: false },
                { text: '100°C', isCorrect: false },
                { text: '-1°C', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Science',
        },
        {
            questionText: 'What is the capital of Japan?',
            options: [
                { text: 'Tokyo', isCorrect: true },
                { text: 'Kyoto', isCorrect: false },
                { text: 'Osaka', isCorrect: false },
                { text: 'Nagoya', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Geography',
        },
        {
            questionText: 'Who painted the Mona Lisa?',
            options: [
                { text: 'Leonardo da Vinci', isCorrect: true },
                { text: 'Vincent van Gogh', isCorrect: false },
                { text: 'Pablo Picasso', isCorrect: false },
                { text: 'Claude Monet', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Art',
        },
        {
            questionText: 'What is the hardest natural substance on Earth?',
            options: [
                { text: 'Diamond', isCorrect: true },
                { text: 'Gold', isCorrect: false },
                { text: 'Iron', isCorrect: false },
                { text: 'Platinum', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Science',
        },
        {
            questionText: 'Who wrote "1984"?',
            options: [
                { text: 'George Orwell', isCorrect: true },
                { text: 'Aldous Huxley', isCorrect: false },
                { text: 'Ray Bradbury', isCorrect: false },
                { text: 'J.D. Salinger', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Literature',
        },
        {
            questionText: 'What is the largest planet in our solar system?',
            options: [
                { text: 'Jupiter', isCorrect: true },
                { text: 'Saturn', isCorrect: false },
                { text: 'Neptune', isCorrect: false },
                { text: 'Mars', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Astronomy',
        },
        {
            questionText: 'What is the powerhouse of the cell?',
            options: [
                { text: 'Mitochondria', isCorrect: true },
                { text: 'Nucleus', isCorrect: false },
                { text: 'Ribosome', isCorrect: false },
                { text: 'Endoplasmic Reticulum', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Biology',
        },
        {
            questionText: 'What is the currency of Japan?',
            options: [
                { text: 'Yen', isCorrect: true },
                { text: 'Won', isCorrect: false },
                { text: 'Yuan', isCorrect: false },
                { text: 'Baht', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Economics',
        },
        {
            questionText: 'Who is the author of the Harry Potter series?',
            options: [
                { text: 'J.K. Rowling', isCorrect: true },
                { text: 'J.R.R. Tolkien', isCorrect: false },
                { text: 'George R.R. Martin', isCorrect: false },
                { text: 'C.S. Lewis', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Literature',
        },
        {
            questionText: 'What is the chemical formula for water?',
            options: [
                { text: 'H2O', isCorrect: true },
                { text: 'CO2', isCorrect: false },
                { text: 'NaCl', isCorrect: false },
                { text: 'O2', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Chemistry',
        },
        {
            questionText: 'What is the main ingredient in guacamole?',
            options: [
                { text: 'Avocado', isCorrect: true },
                { text: 'Tomato', isCorrect: false },
                { text: 'Onion', isCorrect: false },
                { text: 'Lime', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Food',
        },
        {
            questionText: 'What is the capital of Canada?',
            options: [
                { text: 'Ottawa', isCorrect: true },
                { text: 'Toronto', isCorrect: false },
                { text: 'Vancouver', isCorrect: false },
                { text: 'Montreal', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Geography',
        },
        {
            questionText: 'In which year did World War I begin?',
            options: [
                { text: '1914', isCorrect: true },
                { text: '1912', isCorrect: false },
                { text: '1916', isCorrect: false },
                { text: '1918', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'History',
        },
        {
            questionText: 'Who painted "The Starry Night"?',
            options: [
                { text: 'Vincent van Gogh', isCorrect: true },
                { text: 'Claude Monet', isCorrect: false },
                { text: 'Leonardo da Vinci', isCorrect: false },
                { text: 'Pablo Picasso', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'History',
        },
        {
            questionText: 'What is the smallest prime number?',
            options: [
                { text: '2', isCorrect: true },
                { text: '1', isCorrect: false },
                { text: '3', isCorrect: false },
                { text: '5', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Maths',
        },
        {
            questionText: 'What is the largest desert in the world?',
            options: [
                { text: 'Sahara', isCorrect: true },
                { text: 'Gobi', isCorrect: false },
                { text: 'Kalahari', isCorrect: false },
                { text: 'Arctic', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Geography',
        },
        {
            questionText: 'What is the first element on the periodic table?',
            options: [
                { text: 'Hydrogen', isCorrect: true },
                { text: 'Helium', isCorrect: false },
                { text: 'Lithium', isCorrect: false },
                { text: 'Oxygen', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Chemistry',
        },
        {
            questionText: 'What is the longest bone in the human body?',
            options: [
                { text: 'Femur', isCorrect: true },
                { text: 'Tibia', isCorrect: false },
                { text: 'Humerus', isCorrect: false },
                { text: 'Fibula', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Biology',
        },
        {
            questionText: 'Who was the first President of the United States?',
            options: [
                { text: 'George Washington', isCorrect: true },
                { text: 'Thomas Jefferson', isCorrect: false },
                { text: 'Abraham Lincoln', isCorrect: false },
                { text: 'John Adams', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'History',
        },
        {
            questionText: 'What is the capital of Italy?',
            options: [
                { text: 'Rome', isCorrect: true },
                { text: 'Milan', isCorrect: false },
                { text: 'Naples', isCorrect: false },
                { text: 'Florence', isCorrect: false },
            ],
            difficulty: 'easy',
            category: 'Geography',
        },
        {
            questionText: 'Who developed the theory of relativity?',
            options: [
                { text: 'Albert Einstein', isCorrect: true },
                { text: 'Isaac Newton', isCorrect: false },
                { text: 'Galileo Galilei', isCorrect: false },
                { text: 'Niels Bohr', isCorrect: false },
            ],
            difficulty: 'medium',
            category: 'Science',
        },
    ]
    for (const question of questionList) {
        const newQuestion = new Question(question);
        await newQuestion.save();
    }
    console.log('all Questions saved');
};

export const run = async () => {
    await connectDB();
    await addQuestions();
    mongoose.connection.close();
};

// run();