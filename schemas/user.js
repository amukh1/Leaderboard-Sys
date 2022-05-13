const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
    },
    Kills: {
        type: Number,
        required: true,
    },
    Deaths: {
        type: Number,
        required: true,
    },
    KDR: {
        type: Number,
        required: true,
    },
});

let User = mongoose.model('User', userSchema);

module.exports = User;
