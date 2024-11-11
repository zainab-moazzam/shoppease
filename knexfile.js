// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  migrations: {
    directory: path.resolve('src', 'migrations'),
  },
};
