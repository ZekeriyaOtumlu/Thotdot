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
    var userResponses = userInput.scores;

//    Compute best friend match

var matchName = " ";
var matchImage ="";
var totalDifference = 5000;

// All existing friends in the list

for( var i =0; i<dataForFriends.length; i++){

    // compute differences for each question
    var diff = 0;
    for(var j = 0; j < userResponses.length; j++){
        diff += Math.abs(dataForFriends[i].scores[j] - userResponses[j]);
    }

    // if lowest difference, record the friend match
    if(diff < totalDifference){
        totalDifference = diff;
        matchImage = dataForFriends[i].photo;
        matchName = dataForFriends[i].name;
    }
}

    // Push New Friend to the friends Array
    dataForFriends.push(userInput);

    // Send data back to the client side 
    res.send(dataForFriends[i]);
})

}
