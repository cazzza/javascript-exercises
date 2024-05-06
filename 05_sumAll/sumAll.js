const sumAll = function(a, b) {
    if ((typeof a === 'number' && typeof b === 'number') && (a >= 0 && b >=0)) {
        let array = [a,b];
        array.sort(function(a,b) {return a-b});
        let smaller = array[0];
        let bigger = array[1];
        let numArray = [bigger];
        while (smaller < bigger) {
            numArray.push(smaller);
            smaller++;
        };
        let sum = 0;
        numArray.forEach((item) => sum += item);
        return sum;
    } else 
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
