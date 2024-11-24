const reverseString = function(string) {
    const array=[];
    for(let i=0 ; i < string.length ; i++) {
        array[i]=string.at(i);
    }
    const reversedArray= array.reverse();
    return reversedArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
