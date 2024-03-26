const express = require('express');
const router = express.Router()
const UserController = require( '../controllers/UserController' )
const {authMiddleware} = require('../middleware/authMiddleware')

router.post('/sign-up', UserController.createUser)
router.post('/sign-in', UserController.loginUser)
router.put('/update/:id', UserController.updateUser)
router.delete('/delete/:id',authMiddleware, UserController.deleteUser);
router.get('/getAll' ,authMiddleware, UserController.getAllUsers)
router.get('/get-details/:id', UserController.getDetailUser)


module.exports  = router;