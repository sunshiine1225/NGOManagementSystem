const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports =(sequelize, DataTypes) =>
{
    const Event = sequelize.define("event",{
        Event_ID :{
            type:DataTypes.STRING,
            allowNull : false,
            unique : true,
            primaryKey: true

        },
        Event_Name :{
            type : DataTypes.STRING,
            allowNull : false
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
        }

    })
    return Event
}