import {Sequelize} from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Pengaduan = db.define('pengaduan',{
    id_pengaduan: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tgl_pengaduan: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
    nik: DataTypes.CHAR,
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM("0", "proses", "selesai"),
},{
    freezeTableName: true
});

export default Pengaduan;

(async()=>{
    await db.sync();
})();