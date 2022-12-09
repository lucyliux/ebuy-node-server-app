import mongoose from 'mongoose';
const itemsSchema = mongoose.Schema({
  name: String,
  date: Date,
  condition: {type: String, enum: ['NEW', 'USED']},
  price: Number,
  image: String,
  description: String,
  sellerName: String,
}, { collection: "items" })

export default itemsSchema;