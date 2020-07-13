const mongoose = require("mongoose");

// website, location, instruments you play, bands/projects, bio, styles you play, status(musician, band, manager, etc.), social media links

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  instruments: {
    type: [String],
    required: true
  },
  projects: {
    type: [String]
  },
  albums: {
    type: [String]
  },
  genres: {
    type: [String]
  },
  status: {
    type: [String],
    required: true
  },
  website: {
    type: String
  },
  social: {
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    youtube: {
      type: String
    },
    spotify: {
      type: String
    },
    soundcloud: {
      type: String
    },
    itunes: {
      type: String
    }
  },
  followers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      }
    }
  ],
  following: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      }
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
