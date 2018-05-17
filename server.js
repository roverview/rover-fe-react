'use strict';

const express = require('express');

express()
  .use(express.static(`${__dirname}/dist`))
  .listen(process.env.PORT || 8080);