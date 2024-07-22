const UserInfo = require('../models/Usermodel');

const check = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await UserInfo.findOne({ email });

        if (!existingUser) {
            return res.status(200).json({
                success: false,
                existingUser,
                message: 'User Not Exists Go to Sign Up Page'
            });
        }

        if(existingUser.password !== password)
        {
            return res.status(200).json({
                success: false,
                existingUser,
                message: 'Password not Correct'
            });
        }
        else 
        {
            return res.status(200).json({
                success: true,
                existingUser,
                message: 'Login succesfully'
            });

        }
        
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message,
        });
    }
};

module.exports = check;
