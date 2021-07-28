const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    setup: {type :String},
    punchline: {type :String},
    created_at    : { type: Date, required: true, default: Date.now },
    updated_at    : { type: Date, required: true, default: Date.now }
},
);
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;