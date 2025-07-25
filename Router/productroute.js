import express from 'express'
const productroute=express.Router()

import {addProduct,updateproduct,deleteProduct, updatedProduct} from "../Controller/productcontroller.js"


productroute.post('/addproduct',addProduct)

productroute.get('/product/:id',updateproduct)
productroute.post('/productupdate/:id',updatedProduct)
productroute.get('/trash/:id',deleteProduct)

export default productroute