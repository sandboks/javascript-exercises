const reverseString = function(s) {
    let reverse = ""

    for (let i = s.length; i >= 0; i--) {
        reverse += s.charAt(i)
    }

    return reverse
};

// Do not edit below this line
module.exports = reverseString;
