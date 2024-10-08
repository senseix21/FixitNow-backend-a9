import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";

const app: Application = express();
//'https://fixitnow-frontend-a9.vercel.app' || 
const corsOptions = {
    origin: 'https://fixitnow-frontend-a9.vercel.app',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to the app!");
})

//Error handling middleware
app.use(globalErrorHandler);

app.get('/', function (req, res) {
    res.send('Hello World');
});



export default app;  