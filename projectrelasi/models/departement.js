import { Sequelize } from "sequelize";
import db from "../config/database.js";
import User from "./user.js";

const {DataTypes} = Sequelize;

const Departement = db.define('departement', {
    departement_head: DataTypes.STRING,
    departement_description: DataTypes.STRING
},{
    freezeTableName: true
});

Departement.hasMany(User,{foreignKey: 'departement_id'});
User.belongsTo(Departement,{foreignKey: 'departement_id'});

export default Departement;