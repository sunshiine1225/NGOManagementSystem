const donationController = require('../controllers/donationController.js')
const router = require('express').Router()
router.get('/one/:id',donationController.getOne)
router.patch('/one/:id',donationController.updateDonation)
router.post('/add',donationController.addDonation)
router.get('/all',donationController.getAllDonations)
router.delete("/delete/:id",donationController.deleteDonation)
module.exports = router