import { Sequelize } from "sequelize";
import db from "../config/db.js"

const { DataTypes } = Sequelize;

const Tanggapan = db.define("tanggapan", {
    id_tanggapan: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    id_petugas: DataTypes.STRING,
    id_pengaduan: DataTypes.STRING,
    tgl_pengaduan: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    tanggapan: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default Tanggapan;

(async() => {
    await db.sync();
})();