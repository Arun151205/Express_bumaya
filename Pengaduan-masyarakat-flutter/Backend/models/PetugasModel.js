import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Petugas = db.define("petugas", {
    id_petugas: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    nama_petugas:{
        type:DataTypes.STRING,
        unique:true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
    level: {
        type:DataTypes.STRING,
        allowNull:false,
    },
})

// await Petugas.sync();

export default Petugas;