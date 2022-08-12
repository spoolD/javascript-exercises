const ftoc = function(tempF) {
  //Conversion
  let tempC = (5/9) * (tempF - 32);

  //Don't round if integer
  if(Number.isInteger(tempC)){
    return tempC;
  }

  //Otherwise round to nearest tenth
  else{
    return Math.round(tempC*10)/10;
  }
};

const ctof = function(tempC) {
  //Conversion
  let tempF = tempC * (9/5) + 32;

  //Rounding
  if(Number.isInteger(tempF)){
    return tempF;
  }
  
  else{
    return Math.round(tempF*10)/10;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
