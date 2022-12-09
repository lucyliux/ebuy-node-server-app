import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  role: {type: String, enum: ['BUYER', 'SELLER']},
  password: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: { type: String, required: true },
  avatar: String,
  address: String,
  likes: String,
  listings: { type: String },
  reviews: String,
}, { collection: "users" });

export default usersSchema;