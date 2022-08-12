const sumAll = function(num1, num2) {
    let sumNumbers = 0;

    //Error checking
    if (num1 < 0 || num2 < 0 || typeof(num1)!='number' || typeof(num2)!='number'){
        return 'ERROR';
    }
    
    //Assign variables based on values
    let numLow = num1;
    let numHigh = num2;
    if (num2 < num1){
        numLow = num2;
        numHigh = num1;
    }

    //Sum values
    for(i=numLow; i<=numHigh; i++){
        sumNumbers += i;
    }
    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
