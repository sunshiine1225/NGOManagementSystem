const { DataTypes } = require("sequelize");
const { sequelize, volunteer_info } = require(".");

module.exports =(sequelize, DataTypes) =>
{
    const volunteer_info= sequelize.define("volunteer_info",{
        Volunteer_ID :{
            type:DataTypes.STRING,
            allowNull : false,
            unique : true,
            primaryKey: true

        },
        Volunteer_Name :{
            type : DataTypes.STRING,
            allowNull : false
        },
        Email_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            },
        City :{
            type :DataTypes.STRING,
           allowNull : false
        },
        Pincode :{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        State :{
            type: DataTypes.STRING,
            allowNull : false
        },
        IsAdmin:{
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue: 0,
        },
        Verifier_ID:{
            type:DataTypes.STRING,
            allowNull : false,

        }

    })
    return volunteer_info
}