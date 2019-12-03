var dataForFriends = require("../friendsData/friends");
var path = require("path");

module.exports = function(app){

   
  //Routes
 // GET route display all friends data  
  app.get("/api/friends", function(req,res){
      res.json(dataForFriends);
  });

//   POST route to /api/friends

app.post("/api/friends", function(req,res){
    var userInput = req.body;

    userInput.scores.forEach(user =>{
        user.scores = parseInt(user.scores);
    })

    // var userResponses = userInput.scores;

//    Compute best friend match

var compare = [];
// var matchName = "";
// var matchImage ="";


// All existing friends in the list

for( var i =0; i<dataForFriends.length; i++){
 var friendCompared = dataForFriends[i];
 var totalDifference = 0;
    // compute differences for each question
    // var diff = 0;
    for(var j = 0; j < friendCompared.scores.length; j++){
    var differenceScore1= Math.abs(friendCompared.scores[j] - userInput.scores[j]);
   totalDifference += differenceScore1;
}
 compare[i] = totalDifference;

    // if lowest difference, record the friend match
    // if(diff < totalDifference){
    //     totalDifference = diff;
    //     matchImage = dataForFriends[i].photo;
    //     matchName = dataForFriends[i].name;
    // }
}

var matchFriendNum = compare[0];
var friendMatch = 0;

for(var i =1; i<compare.length; i++){
    if(compare[i] < matchFriendNum){
        matchFriendNum = compare[i];
        friendMatch = i;
    }
}

    // Push New Friend to the friends Array
    dataForFriends.push(userInput);

    // Send data back to the client side 
    res.send(dataForFriends[friendMatch]);
})

}
