const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// Cloudinary config
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Directory where images are located
const imageDir = "./src/images";
const outputDir = "./src/output.json";

// JSON data array to store image meta-data
let jsonData = [];

fs.readdir(imageDir, async (err, files) => {
   if (err) {
      console.error("Error reading directory:", err);
      return;
   }

   // Filter jpg and webp files
   const imageFiles = files.filter((file) => file.endsWith(".jpg") || file.endsWith(".webp"));

   for (let file of imageFiles) {
      const filePath = path.join(imageDir, file);

      // Extract details from filename
      const regex = /\[(\w+)-(\d+)\] (\w+) ([\w ]+)/;
      const match = file.match(regex);

      if (!match) {
         console.log("not-matched");
         continue;
      }

      // Upload image to Cloudinary
      try {
         const result = await cloudinary.uploader.upload(filePath, {
            folder: "symrion",
            resource_type: "image",
         });

         // Generate JSON entry
         const imageJson = {
            image: result.secure_url,
            name: match[4],
            description: "--",
            category: match[1],
            price: match[2],
            brand: match[3],
         };
         jsonData.push(imageJson);
         console.log(`Uploaded and processed: ${file}`);
      } catch (uploadError) {
         console.error(`Failed to upload ${file}:`, uploadError);
      }
   }

   // Write JSON data to file
   fs.writeFileSync(outputDir, JSON.stringify(jsonData, null, 2));
   console.log("JSON file generated: output.json");
});
