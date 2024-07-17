import userModel from "../models/userModel.js";
import { comparePwd, hashPwd } from "../utils/authutil.js";
import JWT from "jsonwebtoken";

export const registerController = async(req, res) => {
    try {
        const {name,email,password,phno,addr} = req.body;
        console.log(req.body);
        //validation
        if(!name){
            return res.send({message: 'Name is Required'});
        }
        if(!email){
            return res.send({message: 'Email is Required'});
        }
        if(!password){
            return res.send({message: 'Password is Required'});
        }
        if(!phno){
            return res.send({message: 'Phone number is Required'});
        }
        if(!addr){
            return res.send({message: 'Address is Required'});
        }

        //Allready registered
        const existinguser = await userModel.findOne({email})
        
        if(existinguser){
            return res.status(200).send({
                success: false,
                message: 'Already registered please login',
            })
        }
        //register new user
        const hashedPassword = await hashPwd(password);
        //save in database
        const newuser = await new userModel({name,email,phno,addr,password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:'User Registered Sucessfully',
            newuser
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: ' Error in Registration',
            error
        })
    }
}

export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        console.log(req.body);
        if(!email || !password)
        {
            return res.status(404).send({
                success: false,
                message : 'email and password required'
            })
        }
        //check email registered or not
        const user = await userModel.findOne({email})
        if(!user)
        {
            return res.status(200).send({
                success: false,
                message : 'email is not registered'
            })
        }
        //match password with encrypted password from database
        const match = await comparePwd(password, user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: 'Password is Incorrect'
            })
        }
        //if authenticated properly then
        //create JWT token for that user
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn: "7d"});
        res.status(200).send({
            success: true,
            message: ' Login successfull',
            user:{
                name: user.name,
                email:user.email,
                phno:user.phno,
                addr:user.addr,
            },
            token,
        });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
      
    }
};

//test controller
export const testController = (req,res) =>{
    res.send('protected route');
}