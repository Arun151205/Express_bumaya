import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Computer = db.define('computer', {
    nama_computer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    freezeTableName: true
});

export default Computer;