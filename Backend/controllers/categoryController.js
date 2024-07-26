import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const addCategoryController = async(req, res) =>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(401).send({message: 'Name is required'})
        }
        const duplicate = await categoryModel.findOne({name})
        if(duplicate){
            return res.status(200).send({
                success:true,
                message: ' Category Allready Exists'
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save();
        res.status(201).send({
            success: true,
            message: ' New Category added',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message:' Error in adding Category '
        })
        
    }
}

//updating Category
export const updateCategoryController = async (req, res) =>{
    try {
        const {name} =req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)}, {new:true});
        res.status(201).send({
            success: true,
            message: '  Category Updated sucessfully',
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message:' Error while updating category '
        })
        
    }
}

//Delete Category
export const deleteCategoryController = async(req, res) =>{
    try {
        const {name} =req.body
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id);
        res.status(201).send({
            success: true,
            message: '  Category deleted sucessfully',
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message:' Error while deleting category '
        })
        
    }
}