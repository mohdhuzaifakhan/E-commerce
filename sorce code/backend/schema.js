const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        rate: {
            type: Number
        },
        count: {
            type: Number
        }
    },
    category: {
        type: String
    },
    description: {
        type: String
    }

})


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique:true

    },
    password: {
        type: String,
        required: true
    },
    cartItems: [productSchema]
})

const Customer = new mongoose.model("Customer", userSchema);
module.exports = Customer;