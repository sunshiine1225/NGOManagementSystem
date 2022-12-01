const EventController = require('../controllers/eventController.js')
const router = require('express').Router()
router.get('/one/:id',EventController.getOne)
router.patch('/one/:id',EventController.updateEvent)
router.post('/add',EventController.addEvent)
router.get('/all',EventController.getAllEvents)
router.delete("/delete/:id",EventController.deleteEvent)
module.exports = router