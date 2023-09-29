import Departement from "../models/departement.js";
import Project from "../models/project.js";

export const getAllProjects = async(req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: "Gagal membaca data project: " + error.message });
    }
}

export const getProjectById = async(req, res) => {
    try {
        const response = await Project.findOne({
            where: {
                id: req.params.id
            },
            include: Departement
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createProject = async(req, res) => {
    try {
        const project = await Project.create(req.body);
        const departement = await Departement.findOne({
            where: {
                id: req.body.departement_id
            }
        });
        await project.addDepartement(departement);
        res.json(project);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProject = async(req, res) => {
    try {
        const response = await Project.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ msg: 'succses'});
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteProject = async(req, res) => {
    try {
        const project = await Project.findOne({
            where: {
                id: req.params.id
            }
        });
        const departement = await Departement.findOne({
            where: {
                id: 1
            }
        });
        await project.removeDepartement(departement);
        res.json('succses');
    } catch (error) {
        console.log(error.message);
    }
}