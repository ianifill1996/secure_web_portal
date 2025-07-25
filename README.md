# Secure Web Portal

This is a secure backend API built with Express, MongoDB, Passport, and JWT. It allows users to register, log in via email/password or GitHub OAuth, and manage a private collection of bookmarks.

## Features

- Secure user authentication (local and GitHub OAuth)
- JWT-based authorization
- CRUD functionality for bookmarks
- Modular project structure using Express and Mongoose
- Environment variable support using dotenv

## Tech Stack

- Node.js
- Express
- MongoDB and Mongoose
- Passport.js (with passport-github2)
- Bcrypt
- JSON Web Tokens (JWT)
- dotenv

## Getting Started

### 1. Clone the repository

bash
git clone https://github.com/your-username/secure_web_portal.git
cd secure_web_portal

### 2. Install dependencies
npm install

### 3. Create a .env file
Duplicate the .env.example file and rename it to .env, then fill in the required values:

MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_secret
GITHUB_CALLBACK_URL=http://localhost:5000/api/users/auth/github/callback

### 4. Start the development server
npm run dev

## API Routes

### User Routes
Method	Route	Description
POST	/api/users/register	Register with email and password
POST	/api/users/login	Log in with email and password
GET	/api/users/auth/github	Initiate GitHub OAuth flow
GET	/api/users/auth/github/callback	Handle GitHub OAuth callback

### Bookmark Routes (Protected)
Method	Route	Description
POST	/api/bookmarks/	Create a new bookmark
GET	/api/bookmarks/	Retrieve all user bookmarks
GET	/api/bookmarks/:id	Retrieve a specific bookmark
PUT	/api/bookmarks/:id	Update a bookmark
DELETE	/api/bookmarks/:id	Delete a bookmark
All bookmark routes require a valid JWT in the Authorization header.

## Project Structure

secure_web_portal/
│
├── config/                Configuration files (DB, Passport)
├── models/                Mongoose schemas
├── routes/                API route handlers
├── middleware/            Authentication middleware
├── utils/                 Helper utilities (e.g., JWT logic)
├── .env.example           Sample environment variable setup
├── server.js              Application entry point
└── package.json
