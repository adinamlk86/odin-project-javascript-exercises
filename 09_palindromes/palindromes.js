const palindromes = function (string) {
    let noPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    noPunctuation = noPunctuation.replace(/\s/g, '')
    let array = [...noPunctuation];
    let length = array.length;

    for(let i=0; i<array.length; i++){
        if (array[i] != array[length-i -1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
