import chat from "../models/chat"

// API Controller for creating a new chat
export const createChat = async (req, res) => {
try {
const userId = req.user._id

const chatData = {
userId,
messages: [],
name: "New Chat",
userName: req.user.name


}

await chat.create(chatData) 
req.json({success: true, message: "Chat Created"})
} catch (error) {
    res.json({success: false, message:error.message});
}
}




export const getChat = async (req, res) => {
try {
const userId = req.user._id

const chats = (await chat.find({userId})).sort({updatedAt: -1}) 

req.json({success: true, chats})

} catch (error) {
    res.json({success: false, message:error.message});
}
}






export const deleteChat = async (req, res) => {
try {
const userId = req.user._id

const {chatId} = req.body

await chat.deleteOne({_id: chatId, userId})

req.json({success: true, chats})

} catch (error) {
    res.json({success: false, message:error.message});
}
}


