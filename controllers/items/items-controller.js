import * as itemsDao from './items-dao.js'

const create = async (req, res) => {
  const item = req.body;
  console.log("hoho");
  console.log(req);
  const newItem = await itemsDao.createItem(item);
  res.json(newItem);
}

const findRecentItems = async (req, res) => {
  const itemIds = req.body.itemIds.split(",").filter((str) => str !== "").splice(0, 4);
  console.log(itemIds);
  const items = await itemsDao.findRecentItems(itemIds);
  console.log("recents");
  console.log(items);
  console.log("haha");
  res.json(items);
  // res.json({})
}

const ItemsController = (app) => {
  app.post("/api/items/create", create);
  app.post("/api/items/findRecentItems", findRecentItems);
};

export default ItemsController;
