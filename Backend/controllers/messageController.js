import  User from '../models/User.js'
import chat from '../models/chat.js'


export const textMessageController = async (req, res) => {
try {
const userId = req.user._id
const {chatId, prompt} = req.body

const chat = await Chat. findOne({userId, _id: chatId})
chat.messages .push( {role: "user", content: prompt,
timestamp: Date.now(), isImage: false})


  const {choices} = await ai.choices.create({
    model: "gemini-3.5-flash",
    messages:[
    {role: 'user',
        content: prompt,
    },
    ],
  });



const reply = {...choices[0].messages,timestamp: Date.now(), isImage: false }
res.json({success: true, reply})

chat.messages.push(reply)
await chat.save()



} catch (error) {
    res.json({success: false, message: error.message})

}
}

