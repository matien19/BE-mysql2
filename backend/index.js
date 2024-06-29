import express from "express";
import cors from "cors";
import userRouter from "./routers/UserRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(5000, () => console.log("Server Up and running..."));
