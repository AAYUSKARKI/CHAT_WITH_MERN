import { asynchandler } from "../utils/Asynchandler.js";
import { Apierror } from "../utils/Apierror.js";
import { User } from "../models/user.model.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";

const sendmessage = asynchandler(async(req,res)=>{
    const senderId = req.id;
    const receiverId = req.params.id;
    const {message} = req.body;
    let getConversation = await Conversation.findOne({
        participations:{$all : [senderId,receiverId]}
    })

    if(!getConversation){
        getConversation = await Conversation.create({
            participations:[senderId,receiverId]
        })
    }

    const newmessage = await Message.create({
        senderId,
        receiverId,
        message
    })

    if (newmessage){
        getConversation.messages.push(newmessage._id)
    };

    await getConversation.save()

    return res.status(201).json(
        new Apiresponse(200, getConversation, "User Registered sucesfully")
    )

})

const getmessage = asynchandler(async(req,res)=>{
    const senderId = req.id;
    const receiverId = req.params.id;
    let conversation = await Conversation.findOne({
        participations:{$all : [senderId,receiverId]}
    }).populate("messages")
})

export {
    sendmessage,
    getmessage
}