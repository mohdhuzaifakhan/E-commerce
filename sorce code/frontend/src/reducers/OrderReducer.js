

 export const initialState ={}
export const orderReducer = (state =initialState, action)=>{
              const product = action.payload;

              switch(action.type){
                case "ORDER_PRODUCT":
                        return {...product,success:true,qty:1}
                    
                case "DELETE_PRODUCT":
                    return {...product,success:false}
                    
                default :
                    return state;
              }
}