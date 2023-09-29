import Departement from "../models/departement.js";
import Project from "../models/project.js";

export const getAllProjects = async(req, res) => {
    try {
        const projects = await Project.findAll({include: [Departement]});
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
        res.status(200).json(project);
    } else {
        res.status(404).json({ error: "project tidak ditemukan." });
    }
    } catch (error) {
    res.status(500).json({ error: "Gagal mencari project: " + error.message });
    }
}

export const createProject = async(req, res) => {
    const project = await Project.create(req.body);
        if(req.body.departement_id){
            const departement = await Departement.findOne({where:{id:req.body.departement_id}});
            await project.addDepartement(departement);
        }
        return res.json(project);
}

export const updateProject = async(req, res) => {
    const project = await Project.update(req.body,{where:{id:req.params.id}});
    return res.json("Project berhasil update", project);
}

export const deleteProject = async(req, res) => {
    const project = await Project.destroy({where:{id:req.params.id}});
    return res.json("Project telah dihapus", project);
}