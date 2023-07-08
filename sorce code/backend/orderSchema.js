const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const orderSchema = new mongoose.Schema({

     order :{
        name: {
            type : String ,
            required : true
        },
        phone : {
            type : Number,
            required : true
        },
        house_Number :{
            type : String,
            required : true
        },
        village_or_street :{
            type : String,
            required : true
        },
        town_city :{
            type : String,
            required : true
        },
         pincode :{
            type : Number,
            required : true
         }
       
     } ,
     orderItems :[{
         qty :{
             type : String,
             required : true
         },
         product :{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Product'
             
         }
     }],
     payment : {
        paymentMethod : {
            type : String,          
        }
     },
     
     isPaid : {
        type : Boolean,
        default : false
     },
     paidAt :{
        type : Date
     },
     isDeliver : {
        type : Boolean,
        default : false 
     },
     deliverAt :{
        type : Date
     },
     totalPrice : {
        type : Number
     }
})


const orderModel = new  mongoose.model("Order", orderSchema);
module.exports = orderModel;