'use strict';

const express = require('express');
const PORT = process.env.PORT || 8080;

express()
  .use(express.static(`${__dirname}/dist`))
  .listen(PORT, () => console.log(`listening on PORT ${PORT}`));