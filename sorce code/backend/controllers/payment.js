exports.payment = async (req,res)=>{
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
 }