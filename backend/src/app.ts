import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import userRoutes from "./routes/userRoutes";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use(errorHandler);


export default app;