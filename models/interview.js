const mongoose = require('../config/database');

const interviewSchema = new mongoose.Schema({
  claim: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Claim',
    required: true
  },
  conversations: [{
    question: String,
    answer: String,
    timestamp: Date,
    confidenceScore: Number
  }],
  behaviorMetrics: {
    responseTimeAverage: Number,
    consistencyScore: Number,
    confidenceScore: Number
  },
  status: {
    type: String,
    enum: ['IN_PROGRESS', 'COMPLETED', 'FLAGGED'],
    default: 'IN_PROGRESS'
  }
}, { timestamps: true });

module.exports = mongoose.model('Interview', interviewSchema);