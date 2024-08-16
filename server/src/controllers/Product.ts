import { Request, Response } from "express";
import { ErrorResponse, request } from "../utils";
import Product from "../models/Product";

// create a new product
export const create = request(async (req: Request, res: Response) => {
   const product = await Product.create(req.body);

   res.status(201).send({
      success: true,
      message: "Product added successfully",
      data: product,
   });
});

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

// get details of a product
export const get = request(async (req: Request, res: Response) => {
   const product = await Product.findById(req.params.id).select("-updatedAt");
   if (!product) throw new ErrorResponse(404, "Product not found");
   res.status(200).send(product);
});
