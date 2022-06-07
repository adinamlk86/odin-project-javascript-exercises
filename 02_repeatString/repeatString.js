const repeatString = function(string, numberOfTimes) {
    let newString ="";
    if(numberOfTimes < 0){
        return "ERROR";
    } else{
        for(var i=0; i<numberOfTimes; i++){
            newString = newString+string;
        }
        return newString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
