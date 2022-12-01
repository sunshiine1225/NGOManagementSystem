const { event } = require("../models");
const db = require("../models");

const Event = db.event;

const addEvent = async (req, res) => {
  const info = {
    Event_ID: req.body.Event_ID,
    Event_name: req.body.Event_name,
    City: req.body.City,
    Pincode: req.body.Pincode,
    State: req.body.State,
    Date: "",
    createdAt: "currenttime()",
    updatedAt: "currenttime()",
  };
  await Event.create(info);
  res.status(200).send({}).redirect("/");
};

const getOne = async (req, res) => {
  console.log(req.params.id);
  let d = await Event.findOne({ where: { Event_ID: req.params.id } });
  res.send({ data: d });
};

const getAllEvents = async (req, res) => {
  let d = await Event.findAll({});
  res.status(200).send(d);
};
const deleteEvent = async (req, res) => {
  Event.destroy({
    where: { Event_ID: req.params.id },
  });
};

const updateEvent = async (req, res) => {
  await Event.update(req.body, {
    where: {
      Event_ID: req.params.id,
    },
  });
  res.status(200).send({});
};

module.exports = {
  addEvent,
  getAllEvents,
  deleteEvent,
  getOne,
  updateEvent,
};
