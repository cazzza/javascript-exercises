const convertToCelsius = function(temp) {
  let tempFahrFull = (temp - 32) * (5/9);
  let tempFahrRounded = Math.round(tempFahrFull * 10) / 10;
  return tempFahrRounded;
};

const convertToFahrenheit = function(temp) {
  let tempCelFull = (temp * (9/5) + 32);
  let tempCelRounded = Math.round(tempCelFull * 10) / 10;
  return tempCelRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
