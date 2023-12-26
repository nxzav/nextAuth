import mongoose from 'mongoose';
const { DB_URI, DB_NAME } = process.env;

if (!DB_URI) throw new Error('DB_URI must be defined');

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(DB_URI, { dbName: DB_NAME });
    if (connection.readyState === 1) {
      console.log('MongoDB connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
};
