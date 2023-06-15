
const fs = require('fs');
var obj;
let weight=0;
let allActivities="";
let count =0;

fs.readFile('problem1.json', 'utf8', function (err, data) {
  if (err) throw err;
  
  obj = JSON.parse(data);
  obj.name="Fluffyy"
  
  obj.height=30 
  obj.weight=8 

  obj.catFriends.forEach(catFriend => {
    console.log(catFriend.name + " activities are " + catFriend.activities)
    weight+=catFriend.weight;
    console.log(catFriend.activities.toString())
    allActivities+=catFriend.activities.toString().replace(","," ")
    count += catFriend.activities.length
  });

  console.log("Total cat friends weigth is " + weight+" kg");
  console.log("All cats activities are "+allActivities +" "+ obj.activities.toString().replace(","," "));
  console.log("The total number of activities: "+ parseInt(obj.activities.length+count))
  
  
    obj.catFriends[0].activities.push("watch birds");
    obj.catFriends[0].activities.push("hunt flies");
    obj.catFriends[1].activities.push("play with pens");
    obj.catFriends[1].activities.push("play hide and seek");
    

    obj.catFriends[0].furcolor="orange";
    console.log(obj.catFriends)
});