import * as itemsDao from "./items-dao.js";

const create = async (req, res) => {
  const item = req.body;
  console.log("hoho");
  console.log(req);
  const newItem = await itemsDao.createItem(item);
  res.json(newItem);
};

const findRecentItems = async (req, res) => {
  const itemIds = req.body.itemIds
    .split(",")
    .filter((str) => str !== "")
    .splice(0, 4);
  console.log(itemIds);
  const items = await itemsDao.findItems(itemIds);
  console.log("recents");
  console.log(items);
  console.log("haha");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(items);
};

const findAllItems = async (req, res) => {
  const itemIds = req.body.itemIds.split(",").filter((str) => str !== "");
  console.log(itemIds);
  const items = await itemsDao.findItems(itemIds);
  console.log("all");
  console.log(items);
  console.log("haha");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json(items);
};

const findItemsByKeyword = async (req, res) => {
  const keyword = req.body.keyword;
  console.log(keyword);
  const items = await itemsDao.findItemsByKeyword(keyword);
  console.log("all");
  console.log(items);
  console.log("haha");
  res.json(items);
};

const ItemsController = (app) => {
  app.post("/api/items/create", create);
  app.post("/api/items/findRecentItems", findRecentItems);
  app.post("/api/items/findAllItems", findAllItems);
  app.post("/api/items/findItemsByKeyword", findItemsByKeyword);
};

export default ItemsController;
