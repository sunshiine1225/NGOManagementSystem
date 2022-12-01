const { donation_info } = require("../models");
const db = require("../models");

const Donation = db.donation_info;

const addDonation = async (req, res) => {
  console.log("in add donation")
  const info = {
    Transaction_ID: req.body.Transaction_ID,
    Transaction_Type: req.body.Transaction_Type,
    Donor_ID: req.body.Donor_ID,
    Donation_Amt: req.body.Donation_Amt,
    Date:"currenttime()",
    Verifier_ID: req.body.Verifier_ID,
    createdAt: "currenttime()",
    updatedAt: "currenttime()",
  };
  await Donation.create(info);
  res.status(200).redirect("/donations");
};

const getOne = async (req, res) => {
  console.log(req.params.id);
  let d = await Donation.findOne({ where: { Transaction_ID: req.params.id } });
  res.send({ data: d });
};

const getAllDonations = async (req, res) => {
  let donations = await Donation.findAll({});
  res.status(200).send(donations);
};
const deleteDonation = async (req, res) => {
  Donation.destroy({
    where: { Transaction_ID: req.params.id },
  });
};

const updateDonation = async (req, res) => {
  await Donation.update(req.body, {
    where: {
      Transaction_ID: req.params.id,
    },
  });
  res.status(200).send({});
};

module.exports = {
  addDonation,
  getAllDonations,
  deleteDonation,
  getOne,
  updateDonation,
};
