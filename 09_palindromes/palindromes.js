const palindromes = function (string) {
    //Convert to array and filter out spaces and punctuation with regex
    const stringFiltered = Array.from(string.toLowerCase()).filter(element => /[a-z]/.test(element));

    //Join array back into string
    const stringForward = stringFiltered.join("");

    //Turn string into array, reverse, and rejoin for reversed string
    const stringBackward = [...stringForward].reverse().join("");

    return stringForward === stringBackward;
};

// Do not edit below this line
module.exports = palindromes;
