# Amrytt Media Assignment

## Project Overview
The **Amrytt Media Assignment** is a web-based application built using the MENN stack (MongoDB, Express, Next.js, and Node.js). The project is divided into two main components:

1. **Client**: Built using Next.js, the client side provides a user-friendly interface with pages for Dashboard, Product, Category, and Order management.
2. **Server**: Developed using Node.js and Express, the server handles backend operations and database interactions.

## Features
### Client Side:
- **Dashboard**:
  - Displays a list of products sorted by price (high to low).
  - Shows categories with their respective product counts.
  - Displays total products, total categories, and the total amount.
- **Product Page**:
  - Perform CRUD (Create, Read, Update, Delete) operations on products.
  - Search and sort products.
  - Export product data as an Excel file.
- **Category Page**:
  - Manage categories and view associated product counts.
- **Order Page**:
  - Manage and track orders.

### Server Side:
- API endpoints for managing products, categories, and orders.
- Database interaction using MongoDB.

## Prerequisites
Make sure you have the following installed on your system:
- **Node.js**: Version 14 or above
- **MongoDB**: Local or remote instance
- **npm**: Comes with Node.js installation

## Setup Instructions

### Clone the Repository
```bash
git clone <repository-url>
cd amrytt_media_assignment
```

### Environment Variables
Add `.env` files to both the `client` and `server` directories with the required environment variables.

#### Client `.env` Example:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Server `.env` Example:
```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
JWT_SECRET=<your-jwt-secret>
```

### Install Dependencies
#### Client:
```bash
cd amrytt_media_assigment_client
npm install
```

#### Server:
```bash
cd server
npm install
```

### Run the Application
#### Client:
```bash
cd amrytt_media_assigment_client
npm run dev
```

#### Server:
```bash
cd server
npm run dev
```

## Technologies Used
- **MongoDB**: NoSQL database for storing application data.
- **Express.js**: Web framework for building RESTful APIs.
- **Next.js**: React framework for the client-side application.
- **Node.js**: Runtime environment for the backend.

## Usage
1. Start both the client and server as instructed above.
2. Access the client application in your browser at `http://localhost:3000`.
3. Use the Dashboard to view product statistics and navigate to Product, Category, or Order pages to manage data.

## Additional Notes
- Ensure that MongoDB is running before starting the server.
- Modify the `.env` files with your specific configurations.
- For exporting product data as Excel, ensure the required dependencies are installed.

## Future Enhancements
- Add authentication and user roles.
- Implement advanced filtering and reporting features.
- Enhance UI/UX with additional dashboards and analytics.

