import Departement from "../models/departement.js";
import User from "../models/user.js";

export const getAllUsers = async(req, res) => {
    try {
    const users = await User.findAll({include: [Departement]});
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
    const { name, nik, departement_id } = req.body;
    
    try {
        const newUser = await User.create({
            name,
            nik,
            departement_id
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Gagal membuat user: " + error.message });
    }
}

export const updateUser = async(req, res) => {
    const user = await User.update(req.body,{where:{id:req.params.id}});
    return res.json("User berhasil update");
}

export const deleteUser = async(req, res) => {
    const user = await User.destroy({where:{id:req.params.id}});
    return res.json("User telah dihapus");
}