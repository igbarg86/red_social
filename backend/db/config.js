import pg from 'pg'
import 'dotenv/config'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // port: DB_PORT
  allowExitOnIdle: true
})

console.log(DB_HOST)

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Error conectando a la base de datos:', err)
  } else {
    console.log('Conexión a DB exitosa:', res.rows[0].now)
  }
})

export default pool
