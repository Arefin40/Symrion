import express from "express";
import * as Product from "../controllers/Product";

const router = express.Router();

// upload multiple products
router.post("/upload", Product.uploadMany);

export default router;
