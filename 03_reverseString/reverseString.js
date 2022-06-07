const reverseString = function(string) {
    let array = string.split("");
    array.reverse();
    let reversedString = "";
    for(var i=0; i<array.length;i++){
        reversedString = reversedString + array[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
