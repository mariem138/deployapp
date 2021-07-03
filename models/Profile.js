const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  disease: {
    type: String
  },
  adresse: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  about: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },

  disease: [
    {
      name: {
        type: String,
        required: true
      },
      disease: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  problem: [
    {
      cas: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      lifestatus: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
   
    facebook: {
      type: String
    },
  
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('profile', ProfileSchema);
