const fibonacci = function(n) {
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    if (n < 0)
        return "OOPS";
    if (n <= 2)
        return 1;
    
    return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
