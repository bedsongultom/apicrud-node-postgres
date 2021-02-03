let express = require('express');
let router = express.Router();
const db = require('../controllers/usercontroller.js');


router.get('/users', db.getUsers)
router.get('/users/:userid', db.getUserById)
router.post('/users', db.createUser)
router.put('/users/:userid', db.updateUser)
router.delete('/users/:userid', db.deleteUser)


module.exports = router;
