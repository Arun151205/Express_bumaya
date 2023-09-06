import express from "express";
import Masyarakat from "../models/masyarakat.model.js";

const router = express.Router();

// Read (GET all)
export const getAllMasyarakat = async (req, res) => {
    try {
    const masyarakatList = await Masyarakat.findAll();
    res.status(200).json(masyarakatList);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

// Read (GET by Id)
export const getMasyarakatById = async (req, res) => {
    try {
    const masyarakat = await Masyarakat.findOne({
        where: {
            uuid: req.params.id,
        },
    });
    if (masyarakat) {
        res.status(200).json(masyarakat);
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

        // Buat entitas Masyarakat baru dengan data yang diberikan
        const newMasyarakat = await Masyarakat.create({
            nik: nik,
            nama: nama,
            username: username,
            password: password, // Perhatikan bahwa Anda mungkin ingin melakukan hashing di sini
            telp: telp,
        });

        res.status(201).json({ newMasyarakat });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update (Patch)
export const editMasyarakat = async (req, res) => {
    try {
    const [updated] = await Masyarakat.update(req.body, {
        where: { uuid: req.params.id },
    });
    if (updated) {
        const updatedMasyarakat = await Masyarakat.findOne({
            where: {
                uuid: req.params.id,
            },
        });
        res.status(200).json(updatedMasyarakat);
    } else {
        res.status(404).json({ error: "Masyarakat not found" });
    }
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

// Delete (DELETE)
export const deleteMasyarakat = async (req, res) => {
    try {
    const deleted = await Masyarakat.destroy({
        where: { uuid: req.params.id },
    });
    if (deleted) {
        res.status(204).json({message: "Berhasil menghapus akun!"});
    } else {
        res.status(404).json({ error: "Masyarakat not found" });
    }
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};