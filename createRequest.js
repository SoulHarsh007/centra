const CentraRequest = require('./lib/CentraRequest');
module.exports.default = (url, method) => new CentraRequest(url, method);
module.exports = (url, method) => new CentraRequest(url, method);
module.exports.centra = (url, method) => new CentraRequest(url, method);
