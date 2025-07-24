import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:Boolean,
        default:false
    }
})

const user = new mongoose.model('users', userschema);


export { user }