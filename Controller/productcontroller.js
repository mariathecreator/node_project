import { product } from "../Model/productmodel.js";



const addProduct = async (req, res) => {
    const { name, price, brand } = req.body
    const into = await product.create({ name, price, brand })
    res.redirect('/dashboard')
    console.log(into); 
}

const updateproduct= async(req,res)=>{
 const find =await product.findById(req.params.id) 
 res.render("productupdate",{product:find})
}

const updatedProduct = async (req, res) => {
    const {name,price,brand,description}=req.body
    const updte = await product.findByIdAndUpdate(req.params.id,{name,price,brand,description},{new:true})
    res.redirect('/dashboard')
}

const deleteProduct = async (req, res) => {
    const id = req.params.id
    const trash = await product.findByIdAndDelete( id )
    res.redirect('/dashboard')
    console.log(trash);


}
export { addProduct, updatedProduct, deleteProduct }
export {updateproduct}