import express from 'express';


const router = express.Router();

const moduleRoutes = [
    { path: '/', route:  },



];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;