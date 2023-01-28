
   export const initialState = [];
  
  
  async function  fetchAndUpdateData(product){
   
  
    const user = JSON.parse(localStorage.getItem("user"));
    const {name,email,password} = user;
    const data = {email,password,product}
  
    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
 // localStorage.setItem("user",JSON.stringify(response.data))

//  return response.data.cartItems

  const cart = JSON.parse(localStorage.getItem("user"));
  const data4 = cart.cartItems;

 data4.push(product);

  localStorage.setItem("cart",JSON.stringify(data4))
   
}


 export const ChangeData = (state = initialState, action)=>{
    const product = action.payload;
     
    switch(action.type){
        case 'ADDPRODUCT':         
            fetchAndUpdateData(product);
            //const data =JSON.parse(localStorage.getItem("user"));
           // state = data.cartItems;
           const exist = state.find((x)=>{
            return x.id === product.id;
        })

        if(exist){
             state.map((x)=>{
                return x.id === product.id ? {...x,qty: x.qty+1} : x
            })
        }else{
            const product = action.payload;
            return [
                ...state,
                {
                    ...product,
                    qty:1,
                }
            ]
        }

    
            break;
        case 'DELETPRODUCT' :
            const exist1 = state.find((x)=> x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x)=> x.id !== exist1.id)
            }else{
                return state.map((x)=>{
                    return x.id === product.id ? {...x,qty : x.qty-1} : x
                })
            }
            break;
        case 'LIKE':
          const exist2 = state.find((x)=>{
                  return x.id === product.id;
          })
          if(exist2){
                return  state.map((x)=>{
                return x.id ===product.id ? {...x,isLike:true} : {...x,isLike:false};
               });
                
               
          }else{
            return state.map((x)=>{
                return x.id===product.id ? {...x,isLike:false} : x
            })
          }
          
          default:
            return state;
        break; 
       
    }

 }