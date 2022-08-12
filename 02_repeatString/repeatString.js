const repeatString = function(string, num) {
    // Initialize String
    finalString = '';

    // Error check
    if (num < 0){
        return 'ERROR';
    }
    if (num === 0){
        return '';
    }

    // Repeating string num times
    for (let i=0; i<num; i++){
        finalString += string;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
