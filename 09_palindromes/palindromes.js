const palindromes = function (s) {
    s = s.replace(/[^a-z0-9]/gi, ''); // get alphanumeric only
    s = s.toUpperCase();

    let a = s.slice(0, s.length/2);
    let b = s.slice(Math.round((s.length/2)), s.length);
    b = b.split("").reduce((acc, char) => char + acc, ""); // reverse the string

    //return (a + "/" + b);

    return (a == b);

    return b;

    return s;
};

// Do not edit below this line
module.exports = palindromes;
