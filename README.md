# Book Catalog Application
The Book Catalog Application is a web-based platform that allows users to explore and manage a catalog of books, organized by categories. It provides user registration, category creation, book management, and order placement features. This repository contains the source code and documentation for the application.

## Live link : [https://book-catalog-postgres-prisma-a8.vercel.app/](https://book-catalog-postgres-prisma-a8.vercel.app/)

## Tech Stack 
The Book Catalog Application is built using the following technologies:


Backend:
Node.js
Express.js (API Framework)
Prisma (Database ORM)
PostgreSQL (Database)
JSON Web Tokens (Authentication)
Bcrypt (Password Hashing)

Deployment and Hosting:
PostgreSQL (Database Hosting)

Version Control:
Git & GitHub

Development Tools:
Visual Studio Code,
Postman (API Testing)

# Application Routes
Certainly, here are the endpoint categories along with demo URLs for each endpoint:

### Authentication
- User Signup: POST `/auth/signup`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/auth/signup`
- User Sign In: POST `/auth/signin`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/auth/signin`
- Admin Signup: POST `/admin-signup`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/admin-signup`
- Admin Sign In: POST `/admin-signin`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/admin-signin`

### Services
- Create a New Service: POST `/services/create-service`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/services/create-service`
- Get All Services: GET `/services/`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/services/`
- Get Services by Category: GET `/services/{categoryId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/services/{categoryId}`

### Content
- Create a New Content: POST `/content`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/content`
- Get Content by ID: GET `/content/{contentId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/content/{contentId}`
- Update Content by ID: PUT `/content/{contentId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/content/{contentId}`
- Delete Content by ID: DELETE `/content/{contentId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/content/{contentId}`
- Get All Content: GET `/content`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/content`

### User Feedback
- Create User Feedback: POST `/feedback`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/feedback`
- Get User Feedback by ID: GET `/feedback/{feedbackId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/feedback/{feedbackId}`
- Update User Feedback by ID: PUT `/feedback/{feedbackId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/feedback/{feedbackId}`
- Delete User Feedback by ID: DELETE `/feedback/{feedbackId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/feedback/{feedbackId}`
- Get All User Feedback: GET `/feedback`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/feedback`

### Notifications
- Get Notifications: GET `/notify`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/notify`
- Delete Notification by ID: DELETE `/notify/{notificationId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/notify/{notificationId}`

### Booking
- Create a Booking: POST `/booking`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/booking`
- Get Bookings by User: GET `/booking`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/booking`
- Get All Bookings: GET `/booking/all`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/booking/all`
- Update Booking Status: PATCH `/booking`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/booking`

### Cart
- Add to Cart: POST `/cart`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/cart`
- Get Cart Items: GET `/cart`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/cart`
- Remove from Cart: DELETE `/cart/{id}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/cart/{id}`

### Categories
- Create Category: POST `/category/create-category`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/category/create-category`
- Get All Categories: GET `/category`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/category`
- Get Category by ID: GET `/category/{id}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/category/{id}`
- Update Category by ID: PATCH `/category/{id}`
  - Demo URL: `https://fixitnow-backend-a9

.vercel.app/api/v1/category/{id}`
- Delete Category by ID: DELETE `/category/{id}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/category/{id}`

### Reviews
- Create a Review: POST `/review`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/review`
- Get Reviews for a Service: GET `/review/service/{serviceId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/review/service/{serviceId}`
- Update a Review by ID: PUT `/review/{reviewId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/review/{reviewId}`
- Delete a Review by ID: DELETE `/review/{reviewId}`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/review/{reviewId}`

### Service History
- Get Service History by User: GET `/serviceHistory`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/serviceHistory`

### Profile
- Get User Profile: GET `/profile`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/profile`
- Update User Profile: PATCH `/profile`
  - Demo URL: `https://fixitnow-backend-a9.vercel.app/api/v1/profile`

These are the API endpoints along with their corresponding demo URLs for testing and accessing the API's functionalities.
