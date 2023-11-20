const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        let removeMe = arguments[i]
        while (array.indexOf(removeMe) != -1) {
            array.splice(array.indexOf(removeMe), 1)
        }
    }
    

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
