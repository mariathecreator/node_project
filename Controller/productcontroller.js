import multer from 'multer'
import path from 'path'
import fs from 'fs'

import { product } from "../Model/productmodel.js";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const uniqueName=Date.now()+'-'+file.originalname
        cb(null,uniqueName);
    }
})

const upload = multer({storage:storage})




const addProduct = async (req, res) => {
    try{
         const { name, price, brand,description } = req.body
         const image = req.file.filename
         const into = await product.create({ name, price, brand, description,image })
         res.redirect('/dashboard')
        console.log(into); 
    }
   catch(err){
    console.log("something went wrong:",err);
    }
}

const updateproduct= async(req,res)=>{
 const find =await product.findById(req.params.id) 
 console.log((find.image));
 
 res.render("productupdate",{product:find})
}

const updatedProduct = async (req, res) => {

    const existing = await product.findById(req.params.id)

    const image = req.file?req.file.filename:existing.image

    const {name,price,brand,description}=req.body
    const updte = await product.findByIdAndUpdate(req.params.id,{name,price,brand,description,image},{new:true})
    res.redirect('/dashboard')
}

const deleteProduct = async (req, res) => {
    const id = req.params.id
    const trash = await product.findByIdAndDelete( id )
    res.redirect('/dashboard')
    console.log(trash);


}
export { addProduct, updatedProduct, deleteProduct }
export {updateproduct,upload}