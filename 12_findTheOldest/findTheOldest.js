const findTheOldest = function(people){
    //Sub current year for year of death if still living
    people.forEach(person => {
        const today = new Date();
        if (!('yearOfDeath' in person)){
            person.yearOfDeath = today.getFullYear();
        }
    });

    //Order object by years lived
    const ordered = people.sort(function(a, b) {
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
