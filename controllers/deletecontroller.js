const UserInfo= require('../models/Usermodel')

const deleteUser = async (req,res)=>{

    try 
    {
        const _id =req.params.id;
         
        const user= await UserInfo.findByIdAndDelete({_id})
        console.log(user)

        if(user)
        {
            return res.status(200).json({
                success:true,
                user,
                message:"Entry Deleted Sucessfully"
            })
        }
        else
        {
            console.log("elenjgnjgnjg")
            return res.status(200).json({
                success:false,
                user,
                message:"User Not Exist Already"
            })
        }
        
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

module.exports = deleteUser;