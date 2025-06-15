import { Router } from 'express'
import { getAllPost, createPost, likePost, deletePost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getAllPost)
router.post('/posts', createPost)
router.put('/posts/:id/like', likePost)
router.delete('/posts/:id', deletePost)

export default router
