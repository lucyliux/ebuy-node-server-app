import itemsModel from './items-model.js';

export const createItem = async (item) =>
  await itemsModel.create(item);

export const findItems = async (itemIds) =>
  await itemsModel.find({ '_id': { $in: itemIds } }).catch((err)=>{});
    
export const findItemsByKeyword = async (keyword, limit) =>
  await itemsModel.find({ name: { $regex: keyword, $options: 'i' } }).limit(limit);