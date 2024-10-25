// models/Claim.js
const mongoose = require('../config/database');

const claimSchema = new mongoose.Schema({
  policyHolder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PolicyHolder',
    required: true
  },
  claimNumber: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['MEDICAL', 'DENTAL', 'PRESCRIPTION'],
    required: true
  },
  serviceDate: {
    type: Date,
    required: true
  },
  submissionDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['PENDING', 'INTERVIEWING', 'APPROVED', 'REJECTED'],
    default: 'PENDING'
  },
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interview'
  },
  riskScore: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Claim = mongoose.model('Claim', claimSchema);
module.exports =  Claim;