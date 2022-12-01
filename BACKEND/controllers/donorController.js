const { donor_info } = require("../models");
const db = require("../models");

const Donor = db.donor_info;

const addDonor = async (req, res) => {
  const info = {
    Donor_ID: req.body.Donor_ID,
    Donor_Name: req.body.Donor_Name,
    Email_ID: req.body.Email_ID,
    City: req.body.City,
    Pincode: req.body.Pincode,
    State: req.body.State,
    createdAt: "currenttime()",
    updatedAt: "currenttime()",
  };
  const donor = await Donor.create(info);
  res.status(200).redirect("/donors"); //this redirect properly went to "/"
 
};

const getOne = async (req, res) => {
  let d = await Donor.findAll({ where: { Donor_ID: req.params.id } });
  res.send({ data: d });
};
const getAllDonors = async (req, res) => {
  console.log("in all")
  let donors = await Donor.findAll({});
  res.status(200).send(donors);
};
const deleteDonor = async (req, res) => {
  console.log(req.params.id);
  Donor.destroy({
    where: { Donor_ID: req.params.id },
  });
};

const updateDonor = async (req, res) => {
  console.log(req.body);
  await Donor.update(req.body, {
    where: {
      Donor_ID: req.params.id,
    },
  });
  res.status(200).send({});
};

module.exports = {
  addDonor,
  getAllDonors,
  deleteDonor,
  getOne,
  updateDonor,
};
