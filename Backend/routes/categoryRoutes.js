import  express from 'express'
import { isAdmin, protectdSignIn } from '../middlewares/authMiddleware.js';
import { addCategoryController, deleteCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

//routes
//Add Category route
router.post('/add-category' , protectdSignIn, isAdmin, addCategoryController)

//update category route
router.put('/update-category/:id', protectdSignIn, isAdmin, updateCategoryController)

//delete category route
router.delete('/delete-category/:id', protectdSignIn, isAdmin, deleteCategoryController)


export default router;