// import userModel from "./buyer-model.js"
import * as usersDao from './users-dao.js'

let currentUser = null;

const signup = async (req, res) => {
  const user = req.body;
  const existingUser = await usersDao.findUserByUsername(user.username);
  if (!existingUser) {
    currentUser = await usersDao.createUser(user);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  }
  else {
    // if username already exists
    res.sendStatus(409);
  }
}

const login = async (req, res) => {
  const credentials = req.body;
  const existingUser = await usersDao.findUserByCredentials(credentials);
  if (existingUser) {
    req.session['currentUser'] = existingUser;
    res.send(existingUser);
    return;
  } else {
    res.sendStatus(401);
  }
}

const logout = (req, res) => {
  req.session.destroy();
  res.send(200);
}

const profile = (req, res) => {
  console.log("get current");
  // console.log(req);
  console.log(req.session);
  res.send(req.session['currentUser']);
  // res.json(users)
}

const updateUser = async (req, res) => {
  const user = req.body;
  const found = await usersDao.findUserByUsername(user.username)
  await usersDao.updateUser(user);
  const updatedUser = await usersDao.findUserByUsername(user.username);
  if (updatedUser) {
    // user._id = new Date().getTime() + "";
    req.session['currentUser'] = updatedUser;
    res.json(updatedUser);
  }
  else {
    // if user does not exist
    res.sendStatus(404);
  }
}

const UsersController = (app) => {
  // app.get('/users', findAllUsers)
  // app.get('/users/:uid', findUserById)
  app.put('/users', updateUser)
  // app.delete('/users/:uid', deleteUser)

  app.post("/api/auth/login", login);
  app.post("/api/auth/signup", signup);
  app.post("/api/auth/logout", logout);
  app.post("/api/auth/profile", profile);
};

export default UsersController;
