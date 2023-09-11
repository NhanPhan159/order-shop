const router = require('express').Router();

router.use('/', require('./user/controller'));
router.use("/product",require('./product/controller'))
router.use("/order",require('./order/controller'))

module.exports = router

