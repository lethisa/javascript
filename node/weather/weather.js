// API forecast
// https://api.darksky.net/forecast/def35daf619793635f11fa70695b8402/37.8267,-122.4233
// key = def35daf619793635f11fa70695b8402

// load request module
const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/def35daf619793635f11fa70695b8402/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('unable to connect to forecast server');
  } else if (response.statusCode === 400) {
    console.log('bad request');
  } else if (response.statusCode === 200) {
    console.log(body.currently.temperature);
  }
});
