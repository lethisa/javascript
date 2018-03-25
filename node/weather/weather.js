// API forecast
// https://api.darksky.net/forecast/def35daf619793635f11fa70695b8402/37.8267,-122.4233
// key = def35daf619793635f11fa70695b8402

// load request module
const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/def35daf619793635f11fa70695b8402/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('unable to connect to forecast server');
    } else if (response.statusCode === 400) {
      callback('bad request');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });

};

module.exports.getWeather = getWeather;
