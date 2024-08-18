# Symrion

## Project Overview

This project is a full-stack single-page website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website allows users to interact with a dynamic product catalog, featuring advanced search, filtering, and sorting functionalities. The backend manages product data efficiently, while the frontend ensures a responsive and intuitive user experience.

**Live link:**
You can visit the live version of the project [here](https://sa-symrion.web.app).

## Feature

-  **Product Display:** Fixed-size product cards to display product information including Name, Image, Description, Price, Category, Ratings, and Creation Date.

-  **Pagination:** Efficiently load and navigate through multiple pages of products.

-  **Search:** Search for products based on their names.

-  **Filtering:** Filter products by brand, category, and price range. Multiple filters can be applied simultaneously.

-  **Sorting:** Sort products by price (Low to High, High to Low) and by date added (Newest first).

-  **URL Param Integration:** All search, sorting, and filtering actions use URL parameters, making the website stateful and allowing users to share specific product views or return to the same filtered and sorted content later.

## Technologies Used

-  **Frontend:** React.js, Tailwind CSS, Axios, Firebase, React Router
-  **Backend:** Node.js, Express.js, MongoDB, Mongoose
-  **Authentication:** Firebase (Google and Email/Password)

## How to Run the Project Locally

### Prerequisites

-  Node.js (v14 or higher) installed on your machine.
-  MongoDB instance running locally or a cloud-based MongoDB service.
-  Firebase account set up with a project for authentication.
-  bun / npm / yarn

### Setup Instructions

#### Clone the repository:

```bash
git clone https://github.com/Arefin40/Symrion
cd Symrion
```

#### Backend Setup:

-  Clone the frontend repository:

```bash
cd server
bun install # or yarn install or npm install
```

-  Create a `.env` file in the backend directory and configure your MongoDB connection string and Firebase credentials.

```bash
# MongoDB connection
MONGO_DB_URI = <your_mongodb_connection_url>
DB_NAME = <your_database_name>
```

-  Seed the database with dummy product data (if not already seeded)

-  Locally run command :

```bash
bun dev # yarn dev / npm run dev
```

#### Frontend Setup:

-  Clone the frontend repository:

```bash
cd client
bun install # or yarn install or npm install
```

-  Create a `.env.local` file in the frontend directory and configure your Firebase project credentials. Use `APP_` as prefix in every variable.

```bash
APP_BRAND_NAME = Symrion

# Firebase configurations
APP_API_KEY = <your_firebase_api_key>
APP_AUTH_DOMAIN = <your_firebase_auth_domain>
APP_PROJECT_ID = <your_firebase_project_id>
APP_STORAGE_BUCKET = <your_firebase_storage_bucket>
APP_MESSAGING_SENDER_ID = <your_firebase_messaging_sender_id>
APP_APP_ID = <your_firebase_app_id>

# Backend API URL
APP_API_URL = <your_backend_api_url>
```

-  Locally run command :

```bash
bun dev # yarn dev / npm run dev
```

### Live Link

You can visit the live version of the project [here](https://sa-symrion.web.app).
