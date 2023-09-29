import express from "express";
import {
    getAllComputers,
    getComputerById,
    createComputer,
    updateComputer,
    deleteComputer
} from "./controllers/computer_controller.js";
import {
    getAllDepartements,
    getDepartementById,
    createDepartement,
    updateDepartement,
    deleteDepartement
} from "./controllers/departement_controller.js";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "./controllers/user_controller.js";
import {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} from "./controllers/project_controller.js";

const router = express.Router();

// Computer route
router.get("/computer", getAllComputers);
router.get("/computer/:id", getComputerById);
router.post("/computer", createComputer);
router.patch("/computer/:id", updateComputer);
router.delete("/computer/:id", deleteComputer);

// Departement route
router.get("/departement", getAllDepartements);
router.get("/departement/:id", getDepartementById);
router.post("/departement", createDepartement);
router.patch("/departement/:id", updateDepartement);
router.delete("/departement/:id", deleteDepartement);

// User route
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

// Project route
router.get("/project", getAllProjects);
router.get("/project/:id", getProjectById);
router.post("/project", createProject);
router.patch("/project/:id", updateProject);
router.delete("/project/:id", deleteProject);

export default router;