import Departement from "../models/departement.js";
import Project from "../models/project.js";

export const getAllDepartements = async(req, res) => {
    try {
    const departements = await Departement.findAll({
        include: [ Project ]
        });
    res.status(200).json(departements.map(computer => computer.toJSON()));
    } catch (error) {
    res.status(500).json({ error: "Gagal membaca data komputer: " + error.message });
    }
}

export const getDepartementById = async(req, res) => {
    const departementId = req.params.id;
    try {
    const departement = await Departement.findOne({
        where: { id: departementId },
        include: [ Project ]
        });
    if (departement) {
        res.status(200).json(departement.toJSON());
        } else {
        res.status(404).json({ error: "Departement tidak ditemukan." });
        }
    } catch (error) {
    res.status(500).json({ error: "Gagal mencari departement: " + error.message });
    }
}

export const createDepartement = async (req, res) => {
    const response = await Departement.create(req.body);
    if (req.body.project_id) {
        const project = await Project.findOne({ where: { id: req.body.project_id } });
        await response.addProject(project);
    }
    return res.json(response);
    }


export const updateDepartement = async(req, res) => {
    const departement = await Departement.update(req.body,{where:{id:req.params.id}});
    return res.json("Departement berhasil update", departement);
    }

export const deleteDepartement = async(req, res) => {
    const departement = await Departement.destroy({where:{id:req.params.id}});
    return res.json("Departement telah dihapus", departement);
}