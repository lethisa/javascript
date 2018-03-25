console.log('starting app');

// non-blocking example
setTimeout(() => {
  console.log('inside of fallback');
}, 2000);

setTimeout(() => {
  console.log('second setTimeout');
}, 0);

console.log('finishing app');
