import express from "express";
import booksRoute from "./api/routes/books";
import dbConnect from "./api/config/dbConnect";

const app = express();

const port = process.env.PORT | 5000;

dbConnect();

app.use("/", booksRoute);

app.listen(port, () => {
  console.log("Server running on " + port);
});
