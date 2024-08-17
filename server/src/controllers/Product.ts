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

// get available brands
export const getBrands = request(async (req: Request, res: Response) => {
   const { category } = req.query;
   console.log(category);

   if (!category) throw new ErrorResponse(400, "Category is required");
   const brands = await Product.distinct("brand", {
      category: { $regex: new RegExp(category as string, "i") },
   });
   res.status(200).send(brands);
});

// get max price available
export const getMaxPrice = request(async (req: Request, res: Response) => {
   const { category, brand } = req.query;
   if (!category) throw new ErrorResponse(400, "Category is required");

   // generate case-insensitive filters
   const filter: any = {};
   if (category) filter.category = { $regex: new RegExp(category as string, "i") };
   if (brand) filter.brand = { $regex: new RegExp(brand as string, "i") };

   // find the product with highest price
   const maxPriceProduct = await Product.findOne(filter).sort({ price: -1 }).select("price");

   // Round up the max price to nearest 100
   const maxPrice = Math.ceil((maxPriceProduct?.price || 0) / 100) * 100;

   res.status(200).send({ maxPrice });
});
