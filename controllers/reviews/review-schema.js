import mongoose from 'mongoose';
const reviewSchema = mongoose.Schema({
  sellerId: String,
  buyerId: String,
  date: Date,
  content: String,
})