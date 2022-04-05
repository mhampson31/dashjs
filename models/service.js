const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["Home", "Games", "Admin"],
        required: true
    },

    active: {
        type: Boolean,
        required: true
    },

}, {
    timestamps: true
});


const Service = mongoose.model('Service', serviceSchema, 'service');

module.exports = Service;
