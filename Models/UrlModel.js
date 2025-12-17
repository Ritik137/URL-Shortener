import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    shortCode: {
      type: String,
      required: true,
      unique: true
    },
    longUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Url = mongoose.model('shortURL', urlSchema);
