const express = require("express");
const router = express.Router();
const OrderModel = require("../../model/order");
const authorize = require("../../auth/authorize");
const Role = require("../../auth/role");
const varibleSetup = require("../../config/index")

/**
 * ------------- CONFIG ---------------
 */

/**
 * -------------SET UP ROUTER ---------------
 */
router.post("/", order)
router.get("/", authorize(Role.admin), getOrderGeneral)
router.get("/numberOfBill",authorize(Role.admin),getNumBerOfBill) 
router.get("/:id",authorize(Role.admin),getProductOfBill)
router.put("/:id",authorize(Role.admin),setStatusBill)
 
module.exports = router;

/** 
 * -------------SET UP FUNCTION---------------  
 */  
async function getNumBerOfBill(req,res,next){ 
  try{
    const re = await OrderModel.count({})
    return res.status(200).json(re)
  } catch(e){
    return res.status(500).json(e)
  }
} 
async function setStatusBill(req,res,next){
  const id = req.params.id 
  const data = req.body.isSeen
  if(data){
    const re = await OrderModel.updateOne({_id:id},{
      $set:{
        isSeen: data
      }
    }) 
    return res.status(200).json("updated")
  }
  return res.status(400).json("err")
}

async function getProductOfBill(req,res,next){
  const id = req.params.id
  const re = await OrderModel.findOne({_id:id},{productOrder:1})
  const productBill = {
    id : re._id,
    productBill: re.productOrder.map(curr=>({
      productName: curr.productData.name,
      price: curr.productData.price,
      quantity: curr.quantity
    })
    )
  }
  return res.status(200).json(productBill)
}

async function order(req, res, next) {
  const name = req.body.contact.firstName + req.body.contact.lastName;
  const re = await OrderModel.create({
    phone: req.body.contact.phone,
    address: req.body.contact.address,
    customerName: name,
    productOrder: req.body.products,
  });
  return res.status(200).json(re);
}

async function getOrderGeneral(req, res, next) {
    const page = req.query.page || 0
    let re = await OrderModel
    .find({}, { customerName: 1, phone: 1, address: 1, createdAt: 1, isSeen: 1 })
    .skip(page * varibleSetup.numberPerPage)
    .limit(varibleSetup.numberPerPage)
    return res.status(200).json(re);
}
