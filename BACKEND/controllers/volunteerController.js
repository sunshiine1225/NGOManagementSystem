
const  dbConfig = require('../config/dbConfig.js');
const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases : false,
        pool:
        {

            max :dbConfig.pool.max,
            min :dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,

        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log("Connected")
})
.catch(err => console.log(err))


db.sequelize = sequelize

// associations




/*const { volunteer_info ,event} = require("../models");
const db = require("../models");

const Volunteer = db.volunteer_info;
const Event = db.volunteer_info;

const addVolunteer = async (req, res) => {
  const info = {
    Volunteer_ID: req.body.Volunteer_ID,
    Volunteer_Name: req.body.Volunteer_Name,
    Email_ID: req.body.Email_ID,
    City: req.body.City,
    Pincode: req.body.Pincode,
    State: req.body.State,
    IsAdmin: req.body.IsAdmin,
    Verifier_ID: req.body.Verifier_ID,
    createdAt: "currenttime()",
    updatedAt: "currenttime()",
  };
  const V = await Volunteer.create(info);
  res.status(200).send({}).redirect("/"); //this redirect properly went to "/"
};

const getOne = async (req, res) => {
  let d = await Volunteer.findAll({ where: { Volunteer_ID: req.params.id } });
  res.send({ data: d });
};
const getAllVolunteers = async (req, res) => {
  let V = await Volunteer.findAll({});
  res.status(200).send(V);
};
const deleteVolunteer = async (req, res) => {
  Volunteer.destroy({
    where: { Volunteer_ID: req.params.id },
  });
};

const updateVolunteer = async (req, res) => {
  await Volunteer.update(req.body, {
    where: {
      Volunteer_ID: req.params.id,
    },
  });
  res.status(200).send({});
};



module.exports = {
  addVolunteer,
  getAllVolunteers,
  deleteVolunteer,
  getOne,
  updateVolunteer
  
};
*/
