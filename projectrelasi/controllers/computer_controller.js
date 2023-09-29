import Computer from "../models/computer.js"; 
import User from "../models/user.js";

export const getAllComputers = async(req, res) => {
    try {
        const computers = await Computer.findAll();
        res.status(200).json(computers);
    } catch (error) {
        res.status(500).json({ error: "Gagal membaca data komputer: " + error.message });
    }
}

export const getComputerById = async(req, res) => {
    const computerId = req.params.id;
    try {
    const computer = await Computer.findOne({
        where: { id: computerId },
        include: [User]
    });
    if (computer) {
        res.status(200).json(computer.toJSON());
    } else {
        res.status(404).json({ error: "Komputer tidak ditemukan." });
    }
    } catch (error) {
    res.status(500).json({ error: "Gagal mencari komputer: " + error.message });
    }
}

export const createComputer = async(req, res) => {
    const { nama_computer, user_id } = req.body;
    try {
    const newComputer = await Computer.create({
        nama_computer: nama_computer,
        user_id: user_id
    });
    res.status(201).json(newComputer.toJSON());
    } catch (error) {
    res.status(500).json({ error: "Gagal membuat komputer baru: " + error.message });
    }
}

export const updateComputer = async(req, res) => {
    const computer = await Computer.update(
        req.body,{
            where: {
                id: req.params.id
            }
        }
        );
    return res.json("Computer berhasil update");
}

export const deleteComputer = async(req, res) => {
    const computer = await Computer.destroy({where:{id:req.params.id}});
    return res.json("Computer telah dihapus");
}