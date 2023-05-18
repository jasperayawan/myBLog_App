const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const UserScheme = new mongoose.Schema({
    username: {type: String, required: true, min: 4, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

const UserModel = model('User', UserScheme);

module.exports = UserModel;