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

// get all product
export const getAll = request(async (req: Request, res: Response) => {
   type queryType = Record<string, string | undefined>;
   const { q, category, brand, price, sort, page = "1", limit = "8" } = req.query as queryType;

   let filter: any = {};
   let sortOption: any = {};

   // Search by product name
   if (q) filter.name = new RegExp(q, "i");

   // Category filter
   if (category) {
      const categories = category.split(",").map((c) => new RegExp(c, "i"));
      filter.category = { $in: categories };
   }

   // Brand filter
   if (brand) {
      const brands = brand.split(",").map((b) => new RegExp(b, "i"));
      filter.brand = { $in: brands };
   }

   // Price range filter
   if (price) {
      const priceRange = price.split("-");
      filter.price = {};
      filter.price.$gte = parseInt(priceRange[0]);
      filter.price.$lte = parseInt(priceRange[1]);
   }

   // Sorting
   if (sort === "price_asc") sortOption.price = 1;
   else if (sort === "price_desc") sortOption.price = -1;
   else if (sort === "newest") sortOption.createdAt = -1;

   // pagination parameters
   const _page = parseInt(page) || 1;
   const _limit = parseInt(limit) || 6;
   const startIndex = (_page - 1) * _limit;

   // fetch products with pagination
   const products = await Product.find(filter)
      .lean()
      .sort(sortOption)
      .skip(startIndex)
      .limit(_limit);

   // pagination metadata
   const total = await Product.countDocuments(filter);
   const pages = Math.ceil(total / _limit);
   const count = products.length;

   // products with pagination metadata
   res.status(200).send({ success: true, count, total, page, pages, products });
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
