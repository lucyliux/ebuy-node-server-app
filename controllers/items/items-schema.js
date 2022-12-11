import mongoose from 'mongoose';
const itemsSchema = mongoose.Schema({
  name: String,
  condition: {type: String, enum: ['NEW', 'USED']},
  price: Number,
  image: String,
  description: String,
  sellerName: String,
}, { collection: "items" })

export default itemsSchema;