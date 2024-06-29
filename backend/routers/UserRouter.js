import express from "express";
import { createUser, getUsers, getUsersById } from "../controllers/UserControler.js";

const router = express.Router();

router.get("/Users", getUsers);
router.get("/Users/:id", getUsersById);
router.post("/Users", createUser);

export default router;
