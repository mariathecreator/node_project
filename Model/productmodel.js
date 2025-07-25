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
    Description: {
        type: String,
        required: false
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
        required: false
    }
})

const category = new mongoose.model('category', CategorySchema)

export { product, category }