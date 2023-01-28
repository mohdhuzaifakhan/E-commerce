

export const orderProduct = (data)=>{

   return({
    type : "ORDER_PRODUCT",
    payload : data
   })

} 

export const deleteOrder =(data)=>{
    return({
        type:"DELETE_PRODUCT",
        payload:data
    })
}