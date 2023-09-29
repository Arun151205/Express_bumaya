import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Departement from "./departement.js";

const {DataTypes} = Sequelize;

const Project = db.define('project', {
    project_head: DataTypes.STRING,
    project_name: DataTypes.STRING,
    project_description: DataTypes.STRING
},{
    freezeTableName: true,
    modelName: 'Project',
});

Project.belongsToMany(Departement, {
    through: 'DeptProj',
    foreignKey: 'project_id'
})

export default Project;