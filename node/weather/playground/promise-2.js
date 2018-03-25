const request = require('request');

var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {
    var encodeAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyAuoiT1JCwMTCzE0SyWDs5uzsa1q0bk-eM`,
      json: true
    }, (error, response, body) => {
      // error exception
      if (error) {
        reject('unable to connect to google server');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('unable to find that address');
      } else if (body.status === 'OK') {

        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
