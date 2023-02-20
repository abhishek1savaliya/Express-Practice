const model = require("../models/friends.model");

 function postFriend(req,res){
    if(!req.body.name){
       return res.status(400).json({
            Error : "Friend does not exit"  
        })
        
    }
    const newfriend = {
        id: model.length,
        name : req.body.name
        
    }
    model.push(newfriend);
    res.json(model)
}

function getFriends(req,res){
    res.json(model);
 }

 function getFriend(req,res){
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if(friend){
        res.status(200).json(friend);
    }
    else{
         res.status(404).json({
            Error : "Friend does not exit"
         })
         
    }
}

module.exports = {
   postFriend,
   getFriends,
   getFriend,
}