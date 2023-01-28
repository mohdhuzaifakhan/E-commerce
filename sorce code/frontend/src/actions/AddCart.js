
 import { useEffect } from "react"
 export const AddProduct = (product)=>{

   
   
    return({
        type : 'ADDPRODUCT',

        payload: product
    })
}

export const DeleteProduct = (product)=>{
    return(
        {
            type : 'DELETPRODUCT',
            payload : product

        }
    )
}

export const LikeProduct = (product)=>{
    return ({
        type : 'LIKE',
        payload :{...product,isLike:false}
    })
}