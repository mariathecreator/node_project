import express from 'express'
const productroute=express.Router()

import {addProduct,updateproduct,deleteProduct, updatedProduct,upload} from "../Controller/productcontroller.js"


productroute.post('/addproduct',upload.single('image'),addProduct)

productroute.get('/product/:id',updateproduct)
productroute.post('/productupdate/:id',upload.single('image'),updatedProduct)
productroute.get('/trash/:id',deleteProduct)

export default productroute