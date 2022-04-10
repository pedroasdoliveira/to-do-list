import mongoose from "mongoose";

export const connectToDb = () => {
    mongoose.connect(
        'mongodb+srv://root:44528033@todolist.exliy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => {
        console.log('MongoDB Atlas Conectado!')
    }).catch((err) => {
        console.log(err.message)
    });
};