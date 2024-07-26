import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const addProductController = async (req, res) => {
  try {
    const { name, slug, desc, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    //validations
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !desc:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is Required" });
      case !photo && photo.size > 100000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less than 1 mb" });
    }

    const product = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product added Sucessfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: " Error in adding Product ",
    });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAT: -1 });
    res.status(200).send({
      success: true,
      totalCount: products.length,
      message: "AllProducts received",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: " Error in getting all Product ",
    });
  }
};

//get single product

export const getOneProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate('category');
    res.status(200).send({
      success: true,
      message: "Single Products received",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: " Error in getting Product ",
    });
  }
};

export const photoProductController = async(req, res)=>{
    try {
        const product = await productModel.findById(req.params.id).select('photo')
        if(product.photo.data){
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.data);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        error: error.message,
        message: " Error in getting Product photo ",
    });
    }
}


//delete product
export const deleteProductController = async(req, res) =>{
    try {
        await productModel.findByIdAndDelete(req.params.id).select('-photo')
        res.status(200).send({
            success:true,
            message:'Product deleted sucessfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
        success: false,
        error: error.message,
        message: " Error while deleting Product",
        });
    }
}

//update product
export const updateProductController= async(req, res)=>{
    try {
        const { name, slug, desc, price, category, quantity, shipping } =
          req.fields;
        const { photo } = req.files;
        //validations
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Required" });
          case !desc:
            return res.status(500).send({ error: "Description is Required" });
          case !price:
            return res.status(500).send({ error: "Price is Required" });
          case !category:
            return res.status(500).send({ error: "Category is Required" });
          case !quantity:
            return res.status(500).send({ error: "Quantity is Required" });
          case !photo && photo.size > 100000:
            return res
              .status(500)
              .send({ error: "photo is Required and should be less than 1 mb" });
        }
    
        const products = await productModel.findByIdAndUpdate(req.params.id,
            { ...req.fields, slug: slugify(name)}, {new:true} );
        if (photo) {
          products.photo.data = fs.readFileSync(photo.path);
          products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
          success: true,
          message: "Product updated Sucessfully",
          products,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: " Error in updating Product ",
        });
      }
}