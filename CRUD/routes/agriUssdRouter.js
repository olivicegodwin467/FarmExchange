import express from "express";
import { handleUssdRequest } from "../controller/agriController.js";

const router = express.Router();
router.post("/", handleUssdRequest);

export default router;
