const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const router = new express.Router()

router.get('/allproducts',productController.getAllProducts)

router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.post('/user/addtowishlist',jwtMiddleware,wishlistController.addToWishlist)

router.get('/getwishlist',jwtMiddleware,wishlistController.getWishlist)

router.get('/:id/getaproduct',productController.getaproduct)

router.delete('/removewishlist/:id/item',jwtMiddleware,wishlistController.removeWishlist)

router.post('/user/addtocart',jwtMiddleware,cartController.addToCart)

router.get('/getcart',jwtMiddleware,cartController.getCart)

router.delete('/removecartitem/:id/item',jwtMiddleware,cartController.removeCartItem)

router.get('/:id/incrementcart',jwtMiddleware,cartController.incrementCartItem)

router.get('/:id/decrementcart',jwtMiddleware,cartController.decrementCartItem)

router.delete('/emptycart',jwtMiddleware,cartController.emptyCart)


module.exports = router