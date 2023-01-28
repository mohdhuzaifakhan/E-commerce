// // import React from 'react'   // , injectCheckout
// // import { CheckoutProvider, Checkout, injectCheckout } from 'paytm-blink-checkout-react'
// // import config from "./makePayment";





// // function Test(props) {
// //   const checkoutJsInstance = props.checkoutJsInstance;
// //   return <div>{checkoutJsInstance && <span>checkoutJsInstance.TOKEN</span>}</div>;
// // }


// // function PaYTmBtn() {
// //   const InjectedComponent = injectCheckout(Test);
// //   return (
// //     <CheckoutProvider config={config}>
// //       <InjectedComponent/>
// //     </CheckoutProvider>
// //   )
// // }

// // export default PaYTmBtn


// import { useState } from 'react';



// export default function PaYTmBtn(){
//    const [response, setResponse] = useState({});
//   const getData = async (data)=>{
//          const res = await fetch('http://localhost:8080/api/payment',{
//           method : "POST",
//           headers:{
//             'content-type' : 'application/json'
//           },
//           body : JSON.stringify(data)
//          })

//          setResponse(res);
//   }

//   const handlePay = ()=>{
//               getData({amount : 500,email:"mohd@gmail.com"})
//               console.log(response);
//   }
//   return(
//     <>

//      <div className="container" onClick={handlePay}>PayNow</div>
//     </>
//   )
// }