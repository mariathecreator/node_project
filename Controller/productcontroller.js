import  {product}  from "../Model/productmodel.js";
import {ObjectId} from 'mongodb'

const add=async(req,res)=>{
    const into=await product.insertMany(req.body)
    res.send(into)
}
const review =async(req,res)=>{
    const wiew=await product.find()
    res.send(wiew)
}
const update=async(req,res)=>{
    const para=new ObjectId(req.params.id)
    const updte=await product.findByIdAndUpdate({_id:para},{$set:req.body})
    res.send(updte)
}
const dele =async(req,res)=>{
    const id =new ObjectId(req.params.id)
    const trash= await product.deleteOne({_id:id})
    res.send(trash)
}
export{add,review,update,dele}