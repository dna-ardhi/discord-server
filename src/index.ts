import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import validateEnv from "@utils/validateEnv";

// App Variables
dotenv.config();
validateEnv();

// initializing the express app
const app: Application = express();

// using the dependencies
app.use(helmet());
app.use(cors());
app.use(express.json());

export default app;