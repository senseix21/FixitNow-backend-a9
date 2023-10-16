
# FixItNow - Your On-Demand Home Repair and Maintenance Solution

![FixItNow Logo](https://i.ibb.co/BjB08qZ/wepik-colorful-hand-drawn-handyman-high-quality-services-facebook-ads-202310160923237965.png)

Welcome to FixItNow, your go-to platform for on-demand home repair and maintenance services. With FixItNow, you can quickly and conveniently address all your household repair and maintenance needs. Whether it's a leaky faucet, a faulty electrical socket, or a home improvement project, we've got you covered.

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [User Guide](#user-guide)
  - [Browsing Services](#browsing-services)
  - [Booking a Service](#booking-a-service)
  - [Rating and Reviews](#rating-and-reviews)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [ApplicationRoutes](#ApplicationRoutes)


## Key Features

- **Service Categories:** Browse and book from a wide range of home repair and maintenance services. From plumbing and electrical to painting and HVAC, we've got it all.

- **Instant Booking:** Need immediate assistance? Request on-the-spot service. Or, if you have planned maintenance, schedule appointments at your convenience.

- **Service Provider Ratings:** We value quality service. That's why we let you rate and review service providers, ensuring only the best.

- **Photo Upload:** Sometimes words aren't enough. Upload photos of your issues to provide service providers with context. It helps in quicker assessments.

- **Cost Estimates:** We offer cost estimates for common services, making budget planning a breeze.

- **Payment Processing:** Secure and transparent payment processing ensures smooth and hassle-free transactions.

## Getting Started

### Prerequisites

To run FixItNow locally, you need to have the following software installed:

- Node.js
- npm or yarn
- Database System (e.g., PostgreSQL)
- Any additional environment-specific prerequisites

### Installation

1. Clone this repository.
   ```sh
   git clone https://github.com/your-username/FixItNow.git
   ```

2. Install project dependencies.
   ```sh
   cd FixItNow
   npm install
   ```

3. Set up your environment variables.
   ```sh
   # Create a .env file and add your configuration settings, such as database connection details, API keys, etc.
   ```

4. Run the application.
   ```sh
   npm start
   ```

5. Visit `http://localhost:3000` in your web browser.

## How to Use

- [ ] **Sign Up**: Start by creating your account on FixItNow.
- [ ] **Browse Services**: Explore our wide range of services.
- [ ] **Book Service**: Select the service you need and book it.
- [ ] **Rate and Review**: After your service is completed, leave a rating and review for the service provider.

## User Guide

### Browsing Services

- **Browse by Category**: Filter services by category to find what you need.
- **Search**: Use our powerful search feature to find specific services or service providers.
- **Detailed Information**: Get comprehensive information on each service.

### Booking a Service

- **Instant Booking**: Need immediate help? Request on-the-spot service.
- **Scheduled Booking**: For planned maintenance, schedule appointments.
- **Photos for Context**: Upload photos of your issues to help service providers understand your needs.

### Rating and Reviews

- **Leave Reviews**: After your service is completed, leave a rating and detailed review.
- **Quality Assurance**: We value your feedback, and it ensures quality service.

## Contributing

We welcome contributions! Feel free to open issues, create pull requests, or suggest improvements. Together, we can make FixItNow even better.

## License

This project is licensed under the [MIT License](LICENSE).




# ApplicationRoutes
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
