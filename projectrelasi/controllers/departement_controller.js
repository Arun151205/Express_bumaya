import Departement from "../models/departement.js";
import User from "../models/user.js";

export const getAllDepartements = async(req, res) => {
    try {
    const departements = await Departement.findAll();
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
        include: [User]
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

export const createDepartement = async(req, res) => {
    const { departement_head, departement_description } = req.body;
    
    try {
        const newDepartement = await Departement.create({
            departement_head,
            departement_description
        });

        res.status(201).json(newDepartement);
    } catch (error) {
        res.status(500).json({ error: "Failed to create department: " + error.message });
    }
}