import express from "express";
import * as Product from "../controllers/Product";

const router = express.Router();

// create a new product
router.post("/", Product.create);

// upload multiple products
router.post("/upload", Product.uploadMany);

// get available brands for the selected category
router.get("/brands", Product.getBrands);

// get products details
router.get("/:id", Product.get);

export default router;
