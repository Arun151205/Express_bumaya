import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Departement from "./departement.js";
import Project from "./project.js";

const {DataTypes} = Sequelize;

const DeptProj = db.define('deptproj', {
},{
    freezeTableName: true
},{
    timestamps: false
});

Departement.belongsToMany(Project, { through: DeptProj });
Project.belongsToMany(Departement, { through: DeptProj })

export default DeptProj;