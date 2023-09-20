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
    const projectId = req.params.id;
    try {
    const project = await Project.findOne({
        where: { id: projectId },
        include: [Departement]
    });
    if (project) {
        res.status(200).json(project.toJSON());
    } else {
        res.status(404).json({ error: "project tidak ditemukan." });
    }
    } catch (error) {
    res.status(500).json({ error: "Gagal mencari project: " + error.message });
    }
}

export const createProject = async(req, res) => {
    const { project_head, project_name, project_description } = req.body;
    try {
    const newProject = await Project.create({
        project_head: project_head,
        project_name: project_name,
        project_description: project_description,
    });
    res.status(201).json(newProject.toJSON());
    } catch (error) {
    res.status(500).json({ error: "Gagal membuat project baru: " + error.message });
    }
}