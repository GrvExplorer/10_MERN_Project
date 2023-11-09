import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, config_cors, mongodb_url } from "./config.js";
import { router } from "./router/router.js";

const app = express();

app.use(express.json())

app.use(cors(config_cors));

app.use('/memories', router)

mongoose.connect(mongodb_url).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server Running in port: ${PORT}`);
  });
}).catch((err) => {
  console.log(err);
})
