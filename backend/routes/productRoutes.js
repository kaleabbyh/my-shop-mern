import express from 'express'
const router = express.Router()
import { getProducts, getProduct } from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProduct)

export default router
