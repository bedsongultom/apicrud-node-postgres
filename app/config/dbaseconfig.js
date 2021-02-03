const Pool = require('pg').Pool
const env = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdb',
  password: 'zxcvbnmku',
  port: 5432
})


module.exports = env;