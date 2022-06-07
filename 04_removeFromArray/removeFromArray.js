const removeFromArray = function(array, ...args) {
    
    for(var i=0; i<array.length; i++){
        for(var j=0; j<args.length; j++){
            let index =array.indexOf(args[j]);
            if(index != -1){
                array.splice(index,1)
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
