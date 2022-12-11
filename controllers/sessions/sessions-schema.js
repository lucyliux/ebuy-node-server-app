import mongoose from 'mongoose';
const sessionsSchema = mongoose.Schema({
  name: String,
  date: Date,
  condition: {type: String, enum: ['NEW', 'USED']},
  price: Number,
  image: String,
  description: String,
  sellerName: String,
}, { collection: "sessions" })

export default sessionsSchema;