const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        
    },
    email:{
        type : String,
        required : true,
       
    },
    password :{
        type : String,
        required : true
    },
    cartItems :[{
        id:{
            type:Number
        },
        title:{
            type : String
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
        },
        category:{
            type:String
        },
        description:{
            type:String
        }

    }]
})

const Customer = new mongoose.model("Customer",userSchema);
module.exports =  Customer;