let callbackFunction = function (callback) {
  let i = 0;
  setTimeout(() => {
    i = 42;
    callback(null, i);
  }, 2000);
};

callbackFunction(function (err, value) {
  if (err) {
    return "ERROR";
  }
  console.log(err, value);
});
