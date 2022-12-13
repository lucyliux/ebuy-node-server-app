import * as itemsDao from "./items-dao.js";

const create = async (req, res) => {
  const item = req.body;
  const newItem = await itemsDao.createItem(item);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(newItem);
};

const findRecentItems = async (req, res) => {
  const itemIds = req.body.itemIds
    .split(",")
    .filter((str) => str !== "")
    .splice(0, 4);
  const items = await itemsDao.findItems(itemIds);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(items);
};

const findAllItems = async (req, res) => {
  const itemIds = req.body.itemIds.split(",").filter((str) => str !== "");
  const items = await itemsDao.findItems(itemIds);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(items);
};

const findItemsByKeyword = async (req, res) => {
  const keyword = req.body.keyword;
  const limit =req.body.limit
  const items = await itemsDao.findItemsByKeyword(keyword, limit);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(items);
};

const deleterItem = async (req, res) => {
  const itemId = req.params.itemId;
  const status = await itemsDao.deleteItem(itemId);
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || 'http://localhost:3000');
  res.json(status);
}

const ItemsController = (app) => {
  app.post("/api/items/create", create);
  app.post("/api/items/findRecentItems", findRecentItems);
  app.post("/api/items/findAllItems", findAllItems);
  app.post("/api/items/findItemsByKeyword", findItemsByKeyword);
  app.delete("/api/items/:itemId", deleterItem);
};

export default ItemsController;
