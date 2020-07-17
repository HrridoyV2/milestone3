//Problem 1

function feetToMile(feet){
    if(feet < 0){
        return console.log("Invalid input!Feet never be a negative number");
    }
    else{
        var mile = feet/5280;
        return mile;
    }   
}

// //Problem 2
function woodCalculator(chair, table, khat){
    var woodPerChair = 2, woodPerTable = 2, woodPerKhat = 2;
    if(chair < 0 || table < 0 || khat < 0){
        return console.log("Invalid input!Number of chair,table, khat never be a negative number");
    }
    else{
        var totalWood = woodPerChair*chair + woodPerTable*table + woodPerKhat*khat;
        return totalWood;
    }
}

// //Problem 3
function brickCalculator(numberOfFloor){
    var brickPerFeet = 1000;
    var totalBrick;
    if(numberOfFloor <= 0){
        return console.log("Invalid input!Input can not be a negative number for this Problem");
    }
    else{
        if(numberOfFloor > 0 && numberOfFloor <= 10){
            totalBrick = numberOfFloor*15*1000;
        }
        else if(numberOfFloor > 10 && numberOfFloor <= 20){
            totalBrick = numberOfFloor*12*1000;
        }
        else{
            totalBrick = numberOfFloor*10*1000;
        }
        return totalBrick;
    }
}

//Problem 4

    function tinyFriend(nameOfFriends){
        var nameOfTiny = nameOfFriends[0];
        for(var i = 0; i < nameOfFriends.length; i++){
            
            if(nameOfTiny.length > nameOfFriends[i].length){
                nameOfTiny = nameOfFriends[i];
            }
          }
        if(nameOfTiny == 0){
        return console.log("Invalid Input!Name Can not be emty!");
        }
        else{
        return nameOfTiny;
        }
    }

  