var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('arguments must be numbers');
      }
    }, 1500);
  });
};

// promise one call
// asyncAdd(5, 8).then((res) => {
//   console.log('result:', res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

// chaining promise
asyncAdd(5, 8).then((res) => {
  console.log('result:', res);
  return asyncAdd(res, 33);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log('should be:', res);
}, (errorMessage) => {
  console.log(errorMessage);
});

// basic promise
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//
//   }, 2500);
//   // resolve('hai, worked');
//   reject('unable to fulfill promise');
// });
//
// somePromise.then((message) => {
//   console.log('sucess', message);
// }, (errorMessage) => {
//   console.log('error:', errorMessage);
// });
