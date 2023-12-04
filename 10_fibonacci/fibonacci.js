const fibonacci = function(n) {
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    if (n < 0)
        return "OOPS";
    if (n <= 2)
        return 1;
    
    //return fibonacci(n-1) + fibonacci(n-2);

    let prev = 1; // (n-1)
    let prevprev = 1; // (n-2)
    let current = 2; // n

    for (let i = 3; i < n; i++) {
        prevprev = prev;
        prev = current;
        current = prev + prevprev;
    }

    return current;

};

// Do not edit below this line
module.exports = fibonacci;
