import { connect, ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MongoDB URI is not defined in the environment variables');
}

const connectDB = async (): Promise<void> => {
    try {
        const options: ConnectOptions = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            
            
        };

        await connect(MONGO_URI, options);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
