// import userModel from "./buyer-model.js"
import * as usersDao from "./users-dao.js";

let currentUser = null;

const signup = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByUsername(user.username);
  if (!existingUser) {
    currentUser = await usersDao.createUser(user);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  } else {
    // if username already exists
    res.sendStatus(409);
  }
};

const login = async (req, res) => {
  const credentials = req.body;
  const existingUser = await usersDao.findUserByCredentials(credentials);
  if (existingUser) {
    req.session["currentUser"] = existingUser;
    console.log(req);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(existingUser);
    return;
  } else {
    res.sendStatus(401);
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.send(200);
};

const profile = (req, res) => {
  res.send(req.session["currentUser"]);
};

const updateUser = async (req, res) => {
  const user = req.body;
  const found = await usersDao.findUserByUsername(user.username);
  await usersDao.updateUser(user);
  const updatedUser = await usersDao.findUserByUsername(user.username);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    // if user does not exist
    res.sendStatus(404);
  }
};

const findUserByName = async (req, res) => {
  const username = req.params.username;
  const user = await usersDao.findUserByUsername(username);
  console.log(user);
  console.log(username);
  res.json(user);
};

const UsersController = (app) => {
  // app.get('/users', findAllUsers)
  // app.get('/users/:uid', findUserById)
  app.put("/api/users", updateUser);
  app.get("/api/users/:username", findUserByName);
  // app.delete('/users/:uid', deleteUser)

  app.post("/api/auth/login", login);
  app.post("/api/auth/signup", signup);
  app.post("/api/auth/logout", logout);
  app.post("/api/auth/profile", profile);
};

export default UsersController;
