import express from "express";
import {getManga} from "../controllers/mangas.js";

const router = express.Router();

router.get('/', getManga);

export default router; 