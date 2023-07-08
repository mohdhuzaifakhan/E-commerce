const Customer = require('../schema')

exports.addIntoCart = async(req,res)=>{

    try{  
     const {id,cartItems} = req.body 
     const result = await Customer.findOneAndUpdate({_id:id},{$set:{cartItems:cartItems}})
    //  console.log(result)
     res.json({msg:"Updated succesfully"})
    }catch(e){
     console.log("Some error")
     res.json({msg:"some error while updating"})
    }
  
  }