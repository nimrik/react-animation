const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nimrik:8454fd2e@node-cluster-vabgd.mongodb.net/stores?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`, "consoling");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;