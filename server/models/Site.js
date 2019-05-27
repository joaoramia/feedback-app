const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const siteSchema = new mongoose.Schema(
  {
    siteUrl: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      index: true
    },
    siteToken: { type: String, unique: true, required: [true, "can't be blank"], index: true },
    answers: []
  },
  { timestamps: true }
);

siteSchema.plugin(uniqueValidator, { message: 'is already taken.' });

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
