import  express from 'express'
import { isAdmin, protectdSignIn } from '../middlewares/authMiddleware.js';

import { addProductController, deleteProductController, getAllProductsController, getOneProductController,  photoProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'

const router = express.Router();

//routes
//Add Product route
router.post('/add-product' , protectdSignIn, isAdmin, formidable(), addProductController);

//get all products
router.get('/get-products', getAllProductsController)

//get single product
router.get('/get-product/:slug', getOneProductController)

//get photo with id
router.get('/photo-product/:id', photoProductController)

//delete product
router.delete('/delete-product/:id', protectdSignIn, isAdmin, deleteProductController)

//update product route
router.put('/update-product/:id', protectdSignIn, isAdmin, formidable(), updateProductController)

//delete category route
//router.delete('/delete-category/:id', protectdSignIn, isAdmin, deleteCategoryController)


export default router;