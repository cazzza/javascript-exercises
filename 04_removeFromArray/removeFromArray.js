const removeFromArray = function(array, ...toRemove) {
    cleanArray = array.filter((val) => !toRemove.includes(val));
    return cleanArray;
};



//const removeFromArray = function(array, ...toRemove) {
//    cleanArray = array.filter((array) => array != toRemove);
//    return cleanArray;
//};

// Do not edit below this line
module.exports = removeFromArray;

