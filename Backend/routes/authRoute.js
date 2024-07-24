import express from 'express'
import {registerController, loginController, testController, forgotpwdController} from '../controllers/authController.js'
import {isAdmin, protectdSignIn} from '../middlewares/authMiddleware.js'
const router = express.Router();

//register route
router.post('/register', registerController )

//login route
router.post('/login', loginController )

//test routes
router.get('/test',protectdSignIn, isAdmin, testController);

//Forgot password
router.post('/forgot-pwd', forgotpwdController)

//protected route auth for user

router.get('/user-auth', protectdSignIn, (req,res) =>{
    res.status(200).send({ok:true});
})

//protected route auth for admin

router.get('/admin-auth', protectdSignIn, isAdmin,   (req,res) =>{
    res.status(200).send({ok:true});
})

export default router;
