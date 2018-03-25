// API google map
// https://maps.googleapis.com/maps/api/geocode/json?address=14240%20kelapa%20gading%20timur&key=AIzaSyAuoiT1JCwMTCzE0SyWDs5uzsa1q0bk-eM

// load yargs module
const yargs = require('yargs');
// load file geocode.js
const geocode = require('./geocode/geocode.js');

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

// call function geocode
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
