const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,       
        minlength: 10,
        maxlength: 100,
    }, 
    role: {
        type: String,
        require: true        
    }
},{
    timestamps: true 
})

const User = model('User', userSchema);
module.exports = User;