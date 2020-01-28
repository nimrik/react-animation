const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add a store ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Store ID must me less than 10 chars']
    },
});

module.exports = mongoose.model('Store', StoreSchema);