import User from "../models/user.model.js";
export const getUserForSidebar = async (req,res) =>{
    try {
        const loggedInUser = req.user._id;

        //  const allUsers = await User.find();//gets the all users including self user
        const filteredUsers = await User.find({ _id:{ $ne:loggedInUser}}).select("-password");//gets all users expect the loggedin user

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getting getUserForSidebar",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}