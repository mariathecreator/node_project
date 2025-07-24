import mongoose from 'mongoose'

const  productschema=new mongoose.Schema({
    Name:{
        type:String,
        required:[true]
    },
    Price:{
        type:Number,
        required:[true]
    },
    Brand:{
        type:String,
        required:[true]
    },
    image:String
    })

const product=new mongoose.model('products',productschema);

export {product}