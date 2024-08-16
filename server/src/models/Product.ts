import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      brand: {
         type: String,
         required: true,
         index: true,
      },
      category: {
         type: String,
         required: true,
         index: true,
      },
      rating: {
         type: Number,
         required: true,
         min: 0,
         max: 5,
      },
   },
   { versionKey: false, timestamps: true, autoIndex: true }
);

export default mongoose.model("Product", ProductSchema);
