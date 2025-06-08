import getAllPostModel from '../models/postsModel.js'
import pool from '../../db/config.js'

// RUTA GET

export const getAllPost = async (req, res) => {
  try {
    const posts = await getAllPostModel()
    res.json({ posts })
  } catch (error) {
    console.error('Error al obtener posts:', error)
    res.status(500).json({ message: 'Error en la solicitud' })
  }
}

// RUTA POST

export const createPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body

  const likes = req.body.likes || 0

  const sqlQuery = {
    text: 'INSERT INTO posts(titulo, img, descripcion, likes) VALUES($1, $2, $3, $4) RETURNING *',
    values: [titulo, img, descripcion, likes]
  }

  try {
    const result = await pool.query(sqlQuery)
    res.json(result.rows[0])
  } catch (error) {
    console.error('Error al crear el post:', error)
    res.status(500).json({ message: 'Error al crear el post' })
  }
}
