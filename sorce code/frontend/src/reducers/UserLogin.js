const initialState = {}
    

export const UserLogin = async (state = initialState , action)=>{
    const data = action.payload;
     switch(action.type){
        case 'LOGIN':
            const userData = JSON.parse(localStorage.getItem("localUser"));

            return  state = userData
        
            break;
        // case 'ADDCARTITEM':
        //     const product = data.product
        //     state.itemInCart.push(product);
        //     const response2 = await fetch('http://localhost:8080/cartItem', {
        //         method: 'PUT',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(product)
        //     })
        //     localStorage.setItem(user,state);
        //     return state

    }
}