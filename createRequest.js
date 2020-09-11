const CentraRequest = require('./lib/CentraRequest');

module.exports.centra = (url, method) => new CentraRequest(url, method);
