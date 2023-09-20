import express from "express";
import db from "./config/database.js";
import cors from "cors";

// import models
import User from "./models/user.js";
import Departement from "./models/departement.js";
import DeptProj from "./models/deptproj.js";
import Project from "./models/project.js";
import Computer from "./models/computer.js";
import router from "./Routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

try {
    await db.authenticate();
    // Computer.sync();
    // User.sync();
    // Departement.sync();
    // Project.sync();
    // DeptProj.sync();
    console.log("database connected");
} catch (error) {
    console.error(error);
}

app.listen(5000, ()=> console.log('Server up and running on port 5000'));