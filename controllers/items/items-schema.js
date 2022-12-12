import mongoose from 'mongoose';
const itemsSchema = mongoose.Schema({
  name: String,
  condition: {type: String, enum: ['NEW', 'USED']},
  price: Number,
  date: Date,
  image: String,
  description: String,
  sellerName: String,
}, { collection: "items" })

export default itemsSchema;