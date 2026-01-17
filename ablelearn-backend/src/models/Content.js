const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema(
  {
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    title: {
      type: String,
      required: true
    },

    raw_content: {
      type: String,
      required: true
    },

    ai_generated: {
      level1_explanation: String,
      level2_steps: [String],
      level3_summary: String
    },

    approved_content: {
      level1_explanation: String,
      level2_steps: [String],
      level3_summary: String
    },

    status: {
      type: String,
      enum: ['draft', 'approved'],
      default: 'draft'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Content', ContentSchema);
