const express = require('express')
const router = express.Router()
const ProductModel = require("../../model/product")
const authorize = require("../../auth/authorize")
const Role = require("../../auth/role")
const multer = require("multer")
const fs = require("fs")
 
/**
 * ------------- CONFIG ---------------
 */ 
const photoMiddleware = multer({dest:'upload/'})

/**
 * -------------SET UP ROUTER ---------------
 */
router.get("/",getAllProduct)
router.post("/upload-image",authorize(Role.admin),photoMiddleware.array('photos',100),uploadImage)
router.post("/",authorize(Role.admin),addProduct)
router.delete("/:id",authorize(Role.admin),delProduct)
router.put("/:id",authorize(Role.admin),update)

 
module.exports = router;

/** 
 * -------------SET UP FUNCTION---------------
 */ 

async function update(req,res,next){
    try{
        const id = req.params.id
        const re = await ProductModel.updateOne({_id:id},{
            $set:{
                name:req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            }
        })
        return res.status(200).json(re)
    }
    catch(e){
        console.log(e);
    }
}

async function delProduct(req,res,next){
    try{
        const id = req.params.id
        await ProductModel.deleteOne({_id:id})
        return res.status(200).json("deleted")
    }
    catch(e){
        console.log(e);
    }
}

async function getAllProduct(req,res,next){
    const productDoc = await ProductModel.find()
    return res.status(200).json(productDoc)
}

function uploadImage(req,res,next){
    const uploadFiles = []
    for (let index = 0; index < req.files.length; index++) {
        const {path,originalname} = req.files[index]
        const parts = originalname.split('.')
        const ext = parts[parts.length-1]
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)
        uploadFiles.push(newPath)
    }
    res.json(uploadFiles)
}

async function addProduct(req,res,next){
    const {name,price,description,image} = req.body
    try{
        const product = await ProductModel.create({
            name,
            price,
            description,
            image
        })
        res.json("add success")
    }
    catch(e){
        res.status(422).json(e)
    }
}