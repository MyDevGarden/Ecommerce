import express from 'express'
import {registerController, loginController, testController} from '../controllers/authController.js'
import {isAdmin, protectdSignIn} from '../middlewares/authMiddleware.js'
const router = express.Router();

//register route
router.post('/register', registerController )

//login route
router.post('/login', loginController )

//test routes
router.get('/test',protectdSignIn, isAdmin, testController);

//protected route auth

router.get('/user-auth', protectdSignIn, (req,res) =>{
    res.status(200).send({ok:true});
})

export default router;
