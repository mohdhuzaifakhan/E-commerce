

export const UserLogin = (product)=>{
    return({
        type : 'LOGIN',
        payload : {...product}
    })
}


export const UserCartItem = (product)=>{
    return({
        type: 'ADDCARTITEM',
        payload : {...product}
    })
}