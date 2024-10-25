// models/PolicyHolder.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  memberNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  // Basic personal information
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  nationalId: {
    type: String,
    required: true,
    unique: true
  },
  // Basic contact info
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    lowercase: true
  },
  // Simple policy details
  policyType: {
    type: String,
    enum: ['BASIC', 'STANDARD', 'PREMIUM'],
    required: true
  },
  policyStatus: {
    type: String,
    enum: ['ACTIVE', 'SUSPENDED', 'EXPIRED'],
    default: 'ACTIVE'
  },
  // Reference to claims
  claims: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Claim'
  }],
  // Basic limits
  annualLimit: {
    type: Number,
    required: true
  },
  usedAmount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PolicyHolder', policyHolderSchema);

// models/Claim.js
const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema);