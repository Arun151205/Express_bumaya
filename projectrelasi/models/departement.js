import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./user.js";
import Project from "./project.js";

const {DataTypes} = Sequelize;

const Departement = db.define('departement', {
    departement_head: DataTypes.STRING,
    departement_description: DataTypes.STRING
},{
    freezeTableName: true,
    modelName: 'Departement',
});

Departement.hasMany(User,{foreignKey: 'departement_id'});
User.belongsTo(Departement,{foreignKey: 'departement_id'});
Departement.belongsToMany(Project, {
    through: 'DeptProj',
    foreignKey: 'departement_id',
});

export default Departement;