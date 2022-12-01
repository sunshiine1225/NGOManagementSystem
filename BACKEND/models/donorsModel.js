const { DataTypes } = require("sequelize");
const { sequelize, donor_info } = require(".");

module.exports =(sequelize, DataTypes) =>
{
    const donor_info = sequelize.define("donor_info",{
        Donor_ID :{
            type:DataTypes.STRING,
            allowNull : false,
            unique : true,
            primaryKey: true

        },
        Donor_Name :{
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
        }

    })
    return donor_info
}