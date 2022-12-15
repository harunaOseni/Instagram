module.exports = (errorFunction) => (req, res, next) => {
  errorFunction(req, res, next).catch(next);
};
