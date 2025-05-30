import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true,
    },
},
        //createdAt: Date.now()
    {timestamps: true},

);

const Message = mongoose.model("Message", msgSchema);

export default Message;