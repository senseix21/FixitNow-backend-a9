# Book Catalog Application
The Book Catalog Application is a web-based platform that allows users to explore and manage a catalog of books, organized by categories. It provides user registration, category creation, book management, and order placement features. This repository contains the source code and documentation for the application.

## Live link : [https://book-catalog-postgres-prisma-a8.vercel.app/](https://book-catalog-postgres-prisma-a8.vercel.app/)

**User**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/auth/signup](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/auth/signup)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users)
- GET (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4)
- PATCH (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4)
- DELETE (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4)

**Category**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/create-category](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/create-category)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories)
- GET (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4)
- PATCH (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4)
- DELETE (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4)

**Books**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/create-book](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/create-book)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books)
- GET (Books by Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:categoryId/category](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:categoryId/category)
- GET (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id)
- PATCH (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id)
- DELETE (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:id)

**Orders**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/create-order](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/create-order)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders)
- GET (Single Order): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/:orderId](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/:orderId)

**Profile**
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/profile](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/profile)

Please replace these links with your actual live deployment links in your readme for users to access your application.
