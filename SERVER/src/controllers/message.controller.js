import { asynchandler } from "../utils/Asynchandler.js";
import { Apierror } from "../utils/Apierror.js";
import { User } from "../models/user.model.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/conversation.model.js";

const sendmessage = asynchandler(async(req,res)=>{
    const senderId = req.user._id;
    console.log(senderId,'is the sender id')
    console.log('req.user is',req.user)
    const receiverId = req.params.id;
    console.log('req.params is ',req.params)
    console.log(receiverId,'is the receiver id')
    const {message} = req.body;
    console.log(message)
    let getConversation = await Conversation.findOne({
        participations:{$all : [senderId,receiverId]}
    })

    if(!getConversation){
        getConversation = await Conversation.create({
            participations:[senderId,receiverId],
            messages: []
        })
    }

    const newmessage = await Message.create({
        senderId,
        receiverId,
        message
    })
    console.log('new message is ',newmessage)
    if (newmessage) {
        getConversation.messages = getConversation.messages || []; // Initialize messages array if it doesn't exist
        getConversation.messages.push(newmessage._id);
    }


    await getConversation.save()

    return res.status(201).json(
        new Apiresponse(200, newmessage , "message sent sucesfully")
    )

})

const getmessage = asynchandler(async(req,res)=>{
    const senderId = req.id;
    console.log('req is',req)
    const receiverId = req.params.id;
    let conversation = await Conversation.findOne({
        participations:{$all : [senderId,receiverId]}
    }).populate("messages")

    return res.status(201).json(
        new Apiresponse(200, conversation, "message fetched sucesfully")
    )
})

export {
    sendmessage,
    getmessage
}