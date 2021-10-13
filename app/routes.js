const express = require('express');
const router = express.Router();
module.exports = router;


require('./routes/routes.js')(router);
