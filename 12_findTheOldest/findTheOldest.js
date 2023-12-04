const findTheOldest = function(array) {
    return array.sort(function(a, b) {

        let ageA = ((a.yearOfDeath === undefined) ? 2023 : a.yearOfDeath) - a.yearOfBirth;
        let ageB = ((b.yearOfDeath === undefined) ? 2023 : b.yearOfDeath) - b.yearOfBirth;

        return ageA - ageB;
    })[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
