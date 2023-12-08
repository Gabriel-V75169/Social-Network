const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
      id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  module.exports = reactionSchema;