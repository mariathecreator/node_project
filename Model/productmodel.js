import mongoose from 'mongoose'

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
       required:true
    },
    image: String
})

const product = new mongoose.model('products', productschema);

const CategorySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})

const category = new mongoose.model('category', CategorySchema)

export { product, category }