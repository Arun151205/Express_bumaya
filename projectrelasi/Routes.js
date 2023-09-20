import express from "express";
import {
    createComputer,
    getAllComputers,
    getComputerById
} from "./controllers/computer_controller.js";
import {
    getAllDepartements,
    getDepartementById,
    createDepartement
} from "./controllers/departement_controller.js";
import {
    getAllUsers,
    getUserById,
    createUser
} from "./controllers/user_controller.js";
import {
    getAllProjects,
    getProjectById,
    createProject
} from "./controllers/project_controller.js";

const router = express.Router();

// Computer route
router.get("/computer", getAllComputers);
router.get("/computer/:id", getComputerById);
router.post("/computer", createComputer);

// Departement route
router.get("/departement", getAllDepartements);
router.get("/departement/:id", getDepartementById);
router.post("/departement", createDepartement);

// User route
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);

// Project route
router.get("/project", getAllProjects);
router.get("/project/:id", getProjectById);
router.post("/project", createProject);

export default router;