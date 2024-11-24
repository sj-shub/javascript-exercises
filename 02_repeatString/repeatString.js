const repeatString = function(string,repeatCount) {


    if(repeatCount<0)
        return "ERROR";
    joinedString ="";
    for (let i = 0; i < repeatCount; i++) {
        
        joinedString+=string;
            
        
    }
    return joinedString;

};

// Do not edit below this line
module.exports = repeatString;
