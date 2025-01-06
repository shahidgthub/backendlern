"use strict";

var router = require('express').Router;

router.post('./login', function (req, res) {
  res.send('login sucess');
});
router.post('./signup', function (req, res) {
  res.send('signup sucess');
});
module.exports = router;