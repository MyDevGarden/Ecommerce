import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const addProductController = async (req, res) => {
  try {
    const { name, desc, price, category, quantity } = req.fields;
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
      .populate("category");
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

export const photoProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
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
};

//delete product
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id).select("-photo");
    res.status(200).send({
      success: true,
      message: "Product deleted sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: " Error while deleting Product",
    });
  }
};

//update product
export const updateProductController = async (req, res) => {
  try {
    const { name, desc, price, category, quantity } = req.fields;
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

    const products = await productModel.findByIdAndUpdate(
      req.params.id,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
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
};

//filter product
export const filterProductController = async (req, res) => {
  try {
    const { selected, selectedradio } = req.body;
    let args = {};
    if (selected.length > 0) args.category = selected;
    if (selectedradio.length)
      args.price = { $gte: selectedradio[0], $lte: selectedradio[1] };
    const products = await productModel.find(args);
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while filtering products",
      error,
    });
  }
};

//product count
export const productCountController = async (req, res) => {
  try {
    const count = await productModel.find({}).estimatedDocumentCount();
    console.log(count)
    res.status(200).send({
      success: true,
      count,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      succes: false,
      message: "Error in counting peoducts",
      error,
    });
  }
};

//products list depending  on page
export const productListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const products = await productModel
      .find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAT: -1 });
    res.status(200).send({
      succes: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      succes: false,
      message: "Error in getting peoducts",
      error,
    });
  }
};

//Searching product
export const searchProductController = async (req,res) =>{
  try {
    const {keyword} =req.params
    const results = await productModel.find({
      $or:[
        {name:{$regex: keyword, $options: "i"}},
        {desc:{$regex:keyword, $options:"i"}}
      ]
    }).select("-photo")
    res.json(results)
  } catch (error) {
    console.log(error);
    res.status(400).send({
      succes: false,
      message: "Error in searching peoducts",
      error,
    });
  }
}

//retriving similar products
export const similarProductController = async(req, res) =>{
  try {
    const {pid, cid} = req.params
    const products = await productModel.find({
      category : cid,
      _id:{$ne:pid}, //not including the product whose similar product we are retriving
    }).select('-photo').limit(3).populate('category') // popolate depending upon category
    res.status(200).send({
      success:true,
      products,
    })
  } catch (error) {
    console.log(error);
    res.status(400).send({
      succes: false,
      message: "Error in getting similar peoducts",
      error,
    });
  }
}