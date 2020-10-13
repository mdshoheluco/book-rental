import express from "express";
import { GET_ALL_BOOKS } from "../controllers/books";

const route = express.Router();

route.get("/books", GET_ALL_BOOKS);

export default route;
