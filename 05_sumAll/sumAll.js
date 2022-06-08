const sumAll = function(first, second) {
    let sum = 0;

    if(first < 0 || second < 0 || Number.isInteger(first) == false || Number.isInteger(second) == false ){
        return "ERROR";
    }

    if(first < second){
        for(let i=first; i<=second; i++){
            sum = sum + i;
        }
        return sum;
    } else {
        for(let j=first; j>=second; j--){
            sum = sum + j;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
