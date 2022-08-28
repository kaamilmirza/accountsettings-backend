const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    objectId: String,
    username: String,
    name: String,
    dob: Date,
    phone:String,
    email: String,
    about: String,
    gender:String,
    status:  String,
},{timestamp: true});

module.exports = mongoose.model('Account', accountSchema);

