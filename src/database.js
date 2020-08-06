import mongoose from 'mongoose';
export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
        console.log('db is connected');
    } catch(err) {
        console.log(err);
    }
}

