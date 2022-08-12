const removeFromArray = function(array, ...removeMe) {
    //Iterate through each entry to remove
    for (const arg of removeMe){
        // Iterate through array and remove each instance
        for (let i=0; i<array.length; i++){
            if (array[i] === arg){
                array.splice(i,1)
            }
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
