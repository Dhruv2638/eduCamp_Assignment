// database.ts
import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('MongoDB connected...');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};