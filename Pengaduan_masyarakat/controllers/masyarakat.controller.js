import Masyarakat from "../models/masyarakat.model.js";
import Pengaduan from "../models/pengaduan.model.js";
import argon2 from "argon2";

// Read (GET all)
export const getAllMasyarakat = async (req, res) => {
    try {
    const response = await Masyarakat.findAll({
        attributes: ["uuid", "nik", "nama", "username", "telp"],

    });
    res.status(200).json(response);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

// Read (GET by Id)
export const getMasyarakatById = async (req, res) => {
    try {
    const response = await Masyarakat.findOne({
        attributes: ["uuid", "nik", "nama", "username", "telp"],
        where: {
            uuid: req.params.id,
        },
        include: [{ model: Pengaduan }]
    });
    if (response) {
        res.status(200).json(response);
    } else {
        res.status(404).json({ error: "Masyarakat not found" });
    }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Create (POST)
export const createMasyarakat = async (req, res) => {
    try {
        // Pastikan data yang diperlukan ada dalam req.body
        const { nik, nama, username, password, telp } = req.body;
        const hashPassword = await argon2.hash(password);

        await Masyarakat.create({
            nik: nik,
            nama: nama,
            username: username,
            password: hashPassword, // Perhatikan bahwa Anda mungkin ingin melakukan hashing di sini
            telp: telp,
        });
        res.status(201).json({ message: "Berhasil Register!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const editMasyarakat = async (req, res) => {
    const user = await Masyarakat.findOne({
        where: {
            nik: req.params.id,
        },
    });
    if (!user) return res.status(404).json({ message: "User tidak ditemukan!" });
    
    const { nama, username, telp } = req.body;
    
    try {
        await Masyarakat.update(
        {
            nama: nama || user.nama,
            username: username || user.username,
            telp: telp || user.telp,
        },
        {
            where: {
                nik: req.params.id,
            },
        }
    );
        res.status(201).json({ msg: "Berhasil memperbarui profil!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const deleteMasyarakat = async (req, res) => {
    const user = await Masyarakat.findOne({
        where: {
            nik: req.params.id,
        },
    });
    if (!user)
        return res.status(404).json({ message: "Pengguna tidak ditemukan!" });
    try {
        await Masyarakat.destroy({
        where: {
            nik: req.params.id,
        },
    });
    res.status(200).json({ message: "Berhasil menghapus akun!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};