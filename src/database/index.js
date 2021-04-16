const mongoose = require('mongoose');

mongoose.connect('mongobd://localhost/noderest', { useMongoClinete: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;