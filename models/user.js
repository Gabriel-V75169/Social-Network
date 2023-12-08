const mongoose = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = model('User', userSchema);

module.exports = User;