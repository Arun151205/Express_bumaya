import express from "express";
import fileUpload from "express-fileupload";
import Route from "./routes/Route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"))
app.use(cookieParser());
app.use(Route);

app.listen(port, () => console.log(`server berjalan di http://localhost:${port}`))