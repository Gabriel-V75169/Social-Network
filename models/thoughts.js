const { Schema, model, } = require('mongoose');
const reaction = require('./reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reaction],
}
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;