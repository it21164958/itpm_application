const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();

const app = express();
// Enable all CORS requests
app.use(cors());

app.use(express.json());

//user router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

const initialize = async () => {
    try {
      await mongoose.connect(process.env.MONGO_CONNECT_URL);
      console.log("Mongodb connection success!");
    } catch (e) {
      console.log(e);
    }
  };
  
  const startServer = async () => {
    await initialize();
    app.listen(process.env.PORT || 8000);
    console.log('Server started');
  };
  
  startServer();