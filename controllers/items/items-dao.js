import itemsModel from './items-model.js';

export const createItem = async (item) =>
  await itemsModel.create(item);

export const findRecentItems = async (itemIds) =>
    await itemsModel.find({ '_id': { $in: itemIds } });