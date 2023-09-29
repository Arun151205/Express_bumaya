import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Project = db.define('project', {
    project_head: DataTypes.STRING,
    project_name: DataTypes.STRING,
    project_description: DataTypes.STRING
},{
    freezeTableName: true
});

export default Project;