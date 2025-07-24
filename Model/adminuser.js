import mongoose from 'mongoose'

const adduserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Role:{
        type:Boolean,
        default:false
    }
})

const adduser=new mongoose.model('admin',adduserSchema)

export {adduser}