const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    content_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
      required: false
    },

    action: {
      type: String,
      enum: ['play', 'pause', 'slow', 'repeat', 'audio', 'visual'],
      required: true
    },

    mode_detected: {
      type: String,
      enum: ['blind', 'deaf_mute', 'cognitive', 'default'],
      default: 'default'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Interaction', InteractionSchema);
