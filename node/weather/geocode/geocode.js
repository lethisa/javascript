// load request module
const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodeAddress = encodeURIComponent(address);

  // call request
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyAuoiT1JCwMTCzE0SyWDs5uzsa1q0bk-eM`,
    json: true
  }, (error, response, body) => {
    // error exception
    if (error) {
      callback('unable to connect to google server');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('unable to find that address');
    } else if (body.status === 'OK') {

      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });

    }
  });
};

// export
module.exports.geocodeAddress = geocodeAddress;
