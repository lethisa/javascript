// API google map
// https://maps.googleapis.com/maps/api/geocode/json?address=14240%20kelapa%20gading%20timur&key=AIzaSyAuoiT1JCwMTCzE0SyWDs5uzsa1q0bk-eM


// load request module
const request = require('request');
// load yargs module
const yargs = require('yargs');
// create input - ergv
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodeAddress = encodeURIComponent(argv.address);

// call request
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyAuoiT1JCwMTCzE0SyWDs5uzsa1q0bk-eM`,
  json: true
}, (error, response, body) => {
  // error exception
  if (error) {
    console.log('unable to connect to google server');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('unable to find that address');
  } else if (body.status === 'OK') {
    // console.log(JSON.stringify(body, undefined, 2)); => print all data
    // get address
    console.log(`address: ${body.results[0].formatted_address}`);
    // get latitude
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    //get longitude
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);
  }
});
