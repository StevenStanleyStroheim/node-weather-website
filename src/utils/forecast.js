const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=a022cec5178c53328fd77cb567c6873f&units=imperial";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.cod == 400) {
      callback("Unable to find location!", undefined);
    } else {
      currentTemp = body.main.temp;
      feelsLikeTemp = body.main.feels_like;
      callback(
        undefined,
        "It is currently " +
          currentTemp +
          " degrees out, but it feels like " +
          feelsLikeTemp +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
