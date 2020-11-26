const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = {
  mongoose,
  bcryptjs,
  jwt,
  express,
  bodyParser,
  cors
}
