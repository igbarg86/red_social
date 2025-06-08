import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import postRouter from './routes/posts.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

// RUTA PARA POST

app.use('/api/v1', postRouter)

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`)
})
