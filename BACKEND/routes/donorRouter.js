const donorController = require('../controllers/donorController.js')
const router = require('express').Router()
router.get('/one/:id',donorController.getOne)
router.patch('/one/:id',donorController.updateDonor)
router.post('/add',donorController.addDonor)
router.get('/all',donorController.getAllDonors)
router.delete("/delete/:id",donorController.deleteDonor)
module.exports = router