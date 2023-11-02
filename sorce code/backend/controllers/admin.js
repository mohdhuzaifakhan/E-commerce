const Product = require('../product')


exports.adminLogin =  async(req,res)=>{

   try {
      
      
      Product.find( (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            if(data){
               res.json({data});
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

}



exports.adminSignUp =async (req,res)=>{

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
 
 }