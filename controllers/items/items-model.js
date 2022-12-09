import mongoose from 'mongoose';
import itemsSchema from "./items-schema.js";

const itemsModel = mongoose.model('ItemModel', itemsSchema);

export default itemsModel;