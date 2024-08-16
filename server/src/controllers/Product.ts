import { Request, Response } from "express";
import { ErrorResponse, request } from "../utils";
import Product from "../models/Product";

// upload multiple products
export const uploadMany = request(async (req: Request, res: Response) => {
   const products = req.body;
   if (!Array.isArray(products)) throw new ErrorResponse(400, "Products data should be an array.");

   // Insert products in bulk
   await Product.insertMany(products);

   res.status(201).send({
      success: true,
      message: "Products uploaded successfully",
   });
});
