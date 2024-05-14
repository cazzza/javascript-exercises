const fibonacci = function(number) {
    const sequence = [0, 1];
    let i = 0;

    if (number >= 0) {

    while (i < number) {
        const newNum = sequence[(sequence.length - 1)] + sequence[(sequence.length - 2)];
        sequence.push(newNum);
        i++;
    }
    return sequence[number]
} else {return 'OOPS'}
};



// Do not edit below this line
module.exports = fibonacci;
