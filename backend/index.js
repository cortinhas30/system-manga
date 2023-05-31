import express from "express";
import userRoutes from "./routes/mangas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)
console.log("Servidor funcionando em: http://localhost:8800")

app.listen(8800);