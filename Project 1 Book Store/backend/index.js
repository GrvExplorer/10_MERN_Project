import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRouter from "./routers/router.js";
import cors from "cors";

const app = express();

// converting the request into json formate so that use the data
app.use(express.json());  

// Allow all origin
// app.use(cors())

// allow specific origin
app.use(
  cors({
    origin: "http://localhost:8881",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// setting up initial http route
app.get("/", (_, response) => {
  return response.status(200).send("Hello World!");
});

app.use("/books", bookRouter);
// app.use('/laptop', bookRouter)

// using mongoose to connect with mongodb
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to mongoDB");
    app.listen(PORT, () => {
      console.log("App is runing in port: " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
