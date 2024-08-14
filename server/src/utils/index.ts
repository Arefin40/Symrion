import mongoose from "mongoose";

export const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export { default as request } from "./request";
export { default as ErrorResponse } from "./ErrorResponse";
