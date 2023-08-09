const sequelize = require("../database");
const {DataTypes} = require("sequelize");

const TeacherEntity = sequelize.define('Teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING},
    LastName: {type: DataTypes.STRING},
    Patronymic: {type: DataTypes.STRING},
    Phone: {type: DataTypes.STRING},
    IsFired: {type: DataTypes.BOOLEAN}
});

module.exports = TeacherEntity;