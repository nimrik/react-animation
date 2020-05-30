const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please add an ID'],
        unique: true,
    },
    text: {
        type: String,
        required: [true, "Please add a text"],
        minLength: [3, "Text must contain more than 3 letters"],
        trim: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
});

module.exports = mongoose.model('Store', StoreSchema);