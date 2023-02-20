const path  = require('path');

function getMessages(req,res){
    // res.send("<ul><li>Hello ! I am Albert Einstein</li></ul>")
    res.render('messages',{
        title : 'Messages to My friend',
        friend : 'Elon'
    })
    // res.sendFile(path.join(__dirname,'..','public','images','photo.jpg'))
 }

 function postMessage(req,res){
    console.log("Updating Messages")
}

module.exports  = {
    getMessages,
    postMessage,
}