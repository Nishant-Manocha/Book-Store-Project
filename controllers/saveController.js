const UserInfo= require('../models/Usermodel')
const Contactinfo = require('../models/ContactForm')

exports.saver = async (req,res)=>{

    try 
    {
        const{email,password} = req.body;
        const ExistUser = await UserInfo.findOne({email});

        if(ExistUser)
        {
            return res.status(200).json(
                {
                    success:false,
                    data:ExistUser.email,
                    message:'You are Already Login,Pls Go to Login Page'
                }
            ); 
        }

        const response = await UserInfo.create({email,password});

        res.status(200).json(
            {
                success:true,
                response,
                message:'Entry Created Successfully'
            }
        );    
    } 
    catch (error) 
    {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}

exports.saveContact = async (req,res)=>
{
    try {
        
        const{name,email,message} = req.body;

        const response = await Contactinfo.create({name,email,message});

        res.status(200).json({
            success:true,
            message:"Contact Info Save Successfully",
            response,
        })

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }

}
