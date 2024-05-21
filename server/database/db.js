import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://pandeykunalraj:Kunal1234@blogsphere.61eibxx.mongodb.net/';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error.message);
    }
};

export default Connection;