import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Computer from "./computer.js";

const {DataTypes} = Sequelize;

const User = db.define('user', { 
    name: DataTypes.STRING,
    nik: DataTypes.STRING
},{
    freezeTableName: true
});

User.hasOne(Computer,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
User.hasMany(Computer, { foreignKey: "user_id"});
Computer.belongsTo(User,{foreignKey: 'user_id'});

export default User;