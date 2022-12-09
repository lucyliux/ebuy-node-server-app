import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import UsersController from "./controllers/users/users-controller.js";
import SessionController from "./controllers/session/session-controller.js";
import mongoose from "mongoose";
import ItemsController from "./controllers/items/items-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
  || 'mongodb+srv://KLM:ilovewebdev@ebuy-project.9qfgkai.mongodb.net/ebuy-project?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4
}
mongoose.connect(CONNECTION_STRING, options);

var app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

// let sess = {
//   secret: SECRET,
//   cookie: { secure: false }
// };

// if (process.env.ENV === 'production') {
//   app.set('trust proxy', 1)
//   sess.cookie.secure = true;
// }

app.use(session({
  secret: 'secret', // should be env var
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // or true?
}));

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// extended: true
// }));

UsersController(app);
SessionController(app);
ItemsController(app);
app.listen(4000);