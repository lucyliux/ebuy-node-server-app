import mongoose from 'mongoose';
const itemSchema = mongoose.Schema({
  name: String,
  date: Date,
  condition: String,
  price: Number,
  image: String,
  description: String,
  sellerId: String,
})