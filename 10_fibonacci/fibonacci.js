const fibonacci = function(val) {
    let initValues = [1, 1];
    let i = 2;
    if (val <= 0){
        return 'OOPS'
    }
    
    while (i < val){
        initValues.push(initValues[i-1] + initValues[i-2]);
        i++;
    }

    return initValues[val-1]
};

// Do not edit below this line
module.exports = fibonacci;
