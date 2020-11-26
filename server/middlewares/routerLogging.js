module.exports = (req, res, next) => {
  var full_address = req.protocol + "://" + req.headers.host + req.baseUrl + req.url;
  console.log(`Requested URL: ${full_address} | ${req.method}`);
  next();
};
