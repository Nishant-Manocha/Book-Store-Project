const express = require('express')

const router = express.Router();

const {saver,saveContact} = require('../controllers/saveController')
const check = require('../controllers/checkcontroller');
const deleteUser = require('../controllers/deletecontroller')


router.post("/save",saver);
router.post("/check",check);
router.delete("/delete/:id",deleteUser);
router.post("/contact",saveContact)

module.exports = router;