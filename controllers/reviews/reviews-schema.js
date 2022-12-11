import mongoose from 'mongoose';
const reviewsSchema = mongoose.Schema({
  sellerName: String,
  buyerName: String,
  buyerAvatar: String,
  date: Date,
  content: String,
}, { collection: "reviews" })

export default reviewsSchema