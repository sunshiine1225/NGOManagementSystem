const { DataTypes } = require("sequelize");
const { sequelize, donation_info } = require(".");

// model
const eventModel = require("./eventsModel");

module.exports = (sequelize, DataTypes) => {
  const donation_info = sequelize.define("donation_info", {
    Transaction_ID: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    Transaction_Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Donor_ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Donation_Amt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Verifier_ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return donation_info;
};
