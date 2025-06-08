import { Router } from 'express'
import { getAllPost, createPost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPost)
router.post('/posts', createPost)

export default router
