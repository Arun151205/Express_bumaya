import Departement from "../models/departement.js";
import User from "../models/user.js";

export const getAllUsers = async(req, res) => {
    try {
    const users = await User.findAll();
    res.status(200).json(users);
    } catch (error) {
    res.status(500).json({ error: "Gagal membaca data User: " + error.message });
    }
}

export const getUserById = async(req, res) => {
    const userId = req.params.id;
    try {
    const user = await User.findOne({
        where: { id: userId },
        include: [Departement]
    });
    if (user) {
        res.status(200).json(user.toJSON());
    } else {
        res.status(404).json({ error: "user tidak ditemukan." });
    }
    } catch (error) {
    res.status(500).json({ error: "Gagal mencari user: " + error.message });
    }
}

export const createUser = async(req, res) => {
    const { name, nik } = req.body;
    
    try {
        const newUser = await User.create({
            name,
            nik
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Gagal membuat user: " + error.message });
    }
}