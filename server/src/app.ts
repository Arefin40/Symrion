import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import homeRoute from "./routes/homeRoute";
import productRoute from "./routes/productRoute";
import { errorHandler, notFound } from "./middlewares";
import { connectToDB } from "./config/db";
import corsOptions from "./config/corsOptions";

dotenv.config();
const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/", homeRoute);
app.use("/products", productRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

// connect to the database
const PORT = process.env.PORT || 3000;
connectToDB()
   .then(() => app.listen(PORT, () => console.log(`Listening at 🎉 http://localhost:${PORT}`)))
   .catch((error) => console.log(error));

export default app;
