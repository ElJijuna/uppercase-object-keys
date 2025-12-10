

module.exports = object => {
  return Object.keys(object).reduce((result, key) => {
    result[key.toUpperCase()] = object[key];
    return result;
  }, {});
};

