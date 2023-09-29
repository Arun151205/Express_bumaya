import Departement from "../models/departement.js";
import User from "../models/user.js";

export const getAllDepartements = async(req, res) => {
    try {
        const departements = await Departement.findAll();
        res.status(200).json(departements);
    } catch (error) {
        res.status(500).json({ error: "Gagal membaca data komputer: " + error.message });
    }
}

export const getDepartementById = async(req, res) => {
    const departementId = req.params.id;
    try {
    const departement = await Departement.findOne({
        where: { id: departementId },
        include: User
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
    try {
        const response = await Departement.create(req.body);
        return res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const updateDepartement = async(req, res) => {
    try {
        const response = await Departement.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json('succses');
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDepartement = async(req, res) => {
    try {
        const response = await Departement.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json('succses');
    } catch (error) {
        console.log(error.message);
    }
}