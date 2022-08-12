const leapYears = function(year) {

    //Leap year if divisible by 4
    if (year % 4 === 0){
        //Leap year if divisible by 100 and 400
        if(year % 100 === 0 && year % 400 === 0){
            return true;
        }
        //Not a leap year if divisible by 100 but not 400
        else if (year % 100 === 0 && year % 400 !== 0){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
