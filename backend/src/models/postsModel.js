import pool from '../../db/config.js'

// GET

export const getAllPostModel = async () => {
  const sqlQuery = { text: 'SELECT * FROM posts' }
  const result = await pool.query(sqlQuery)
  console.log(result.rows)
  return result.rows
}

export default getAllPostModel
