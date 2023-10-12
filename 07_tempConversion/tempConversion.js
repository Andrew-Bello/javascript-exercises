const convertToCelsius = function(fahrenheit) {
  let newCelsius = (fahrenheit - 32) / 1.8;
  return Math.round(newCelsius * 10) / 10;
}

const convertToFahrenheit = function(celsius) {
  let newFahrenheit = (celsius * 1.8) + 32;
  return Math.round(newFahrenheit * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
