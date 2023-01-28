require('./mongoose');
const Customer = require('./schema');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
const Order = require('./orderSchema');
const { json } = require('body-parser');
const Product = require('./product');
//const paymentRoute = require('./paymentRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   origin: "http://localhost:3000"
}))
//app.use('/api',paymentRoute);


app.get('/login', (req, res) => {

   try {
      const email = req.query.email;
      const password = req.query.password;
      
      Customer.findOne({ email, password }, (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            if(data){
               res.json({status:'ok',data:data});
               
            }else{
               res.json({status:'no'})
            }           

         }
      })

   } catch (e) {
      console.log(e);
   }
})


app.post('/user',async(req,res)=>{

  try{  
   const {email, password,product} = req.body 
   const document = await Customer.findOne({ email, password })
    
   if(product){
       const cart =  document.cartItems.concat(product);
       const response = await Customer.findOneAndUpdate({password:password},{cartItems : cart},{new:true})
   res.json({data:response});
   console.log("Updated");
   }else{
      console.log("No product to update");
   } 
  
  }catch(e){
   console.log("Some error")
  }

})

app.post('/signup', (req, res) => {

 
      const { name, email, password, status } = req.body;

      const newCustomer = new Customer({
         name: name,
         email: email,
         password: password,
         status: status
      });
      newCustomer.save((err) => {
         if (!err) {
            console.log('successfully added') 
            res.json({ status: 'ok' , verify : "successfully register"});
         } else {
            console.error(err);
            res.json({status:'something went wrong'})
         }
      });
      
})

app.post('/order', (req,res)=>{
   const {fullName,phoneNumber,houseNumber,street,city,Pincode,orderProduct}= req.body;
   const newOrder = new Order({
      order : {
         name : fullName,
         phone : phoneNumber ,
         house_Number: houseNumber,
         village_or_street : street,
         town_city : city,
         pincode : Pincode
      },
      orderItems : {
         title: orderProduct.title,
         image: orderProduct.image,
         price: orderProduct.price,
         qty : orderProduct.qty
         
      },
      payment : {
         paymentMethod : "paypal",
         name: "paypal"
      }
     
   }) 
   newOrder.save((err) => {
      if (!err) {
         console.log('successfully added') 
         res.json({ message: 'ok' , verify : "successfully"});
      } else {
         console.error(err);
         res.json({status:'something went wrong'})
      }
   });
   
})

app.put('/pay', async (req,res)=>{
   const order =  await Order.findById(req.params.phone);
   if(order){
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payment = req.params.payment;
      const orderPaid = await order.save();
      res.json({message : "Order is Paid" , data : orderPaid});
   }else{
      res.status(404).json({message : "order is not found"});
   }
})

app.get('/admin', async(req,res)=>{

   try {
      
      
      Product.find( (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            if(data){
               res.json({data:data});
               console.log("data successfully fetched");
               //console.log(data);
            }else{
               res.json({data:[]})
            }                                 

         }
      })

   } catch (e) {
      console.log(e);
   }

})


app.post('/admin',async (req,res)=>{

   try{
      const {Id,Title,Price,Discription,Category,Image,rating} = req.body;

      const newProduct = new Product({
         id : Id,
         title : Title,
         price:Price,
         discription : Discription,
         category : Category,
         image : Image,
         rating : rating

      })
         newProduct.save((err)=>{
         if(!err){
            console.log("Successfully added");
            res.json({message:"Added"});
         }else{
            console.log(err);
         }
      })

   }catch(e){
      console.log(e);
   }

})

app.listen(8080, () => {
   console.log("Runniing on 8080")
})


