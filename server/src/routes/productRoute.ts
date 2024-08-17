import express from "express";
import * as Product from "../controllers/Product";

const router = express.Router();

// create a new product
router.post("/", Product.create);

// upload multiple products
router.post("/upload", Product.uploadMany);

// get all products
router.get("/", Product.getAll);

// get available brands for the selected category
router.get("/brands", Product.getBrands);

// get max-price available based on category and brand
router.get("/max-price", Product.getMaxPrice);

// get products details
router.get("/:id", Product.get);

export default router;
