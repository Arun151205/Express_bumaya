import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Masyarakat = db.define(
    "masyarakat",
    {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
        notEmpty: true,
        },
    },
    nik: {
        type: DataTypes.CHAR,
        primaryKey: true,
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.CHAR,
    },
    {
    freezeTableName: true,
    }
);

export default Masyarakat;

// (async () => {
//     await db.sync();
// })();