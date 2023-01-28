const mongoose = require('mongoose');



const productSchema = mongoose.Schema({
    id :{
        type :Number
    },
    title:{
        type : String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    rating:{
        rate:{
            type:Number
        },
        count:{
            type:Number
        }
    }
})

const Product = new mongoose.model("product",productSchema);
module.exports =  Product;