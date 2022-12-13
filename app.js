import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import UsersController from "./controllers/users/users-controller.js";
import SessionsController from "./controllers/sessions/sessions-controller.js";
import mongoose from "mongoose";
import ItemsController from "./controllers/items/items-controller.js";
import cookieParser from "cookie-parser";
import ReviewsController from "./controllers/reviews/reviews-controller.js";

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
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
}));

app.use(session({
  secret: 'secret', // should be env var
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite: false }
}));

app.use(express.json());
app.use(cookieParser());

UsersController(app);
SessionsController(app);
ItemsController(app);
ReviewsController(app);
app.listen(process.env.PORT || 4000);