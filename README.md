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
## **User**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/auth/signup](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/auth/signup)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users)
- GET (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160)
- PATCH (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160)
- DELETE (Single User): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/users/b7a8b078-28bb-4190-b85e-30e47ba23160)

## **Category**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/create-category](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/create-category)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories)
- GET (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e)
- PATCH (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e)
- DELETE (Single Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/categories/840af225-57ed-4289-9110-fa2ab60ffd0e)

## **Books**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/create-book](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/create-book)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books)
- GET (Books by Category): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/:categoryId/category](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/840af225-57ed-4289-9110-fa2ab60ffd0e/category)
- GET (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b)
- PATCH (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b)
- DELETE (Single Book): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/books/fed4fcf2-e840-443c-80dd-303a2bc5328b)

## **Orders**
- POST: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/create-order](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/create-order)
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders)
- GET (Single Order): [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/dd199593-d9ba-4549-a2cc-ba1fcc7dc71c](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/orders/dd199593-d9ba-4549-a2cc-ba1fcc7dc71c)

## **Profile**
- GET: [https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/profile](https://book-catalog-postgres-prisma-a8.vercel.app/api/v1/profile)

