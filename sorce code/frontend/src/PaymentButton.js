import React, { useState,useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

 
export default function PaymentButton(props) {
 const total = props.data;
 const [show, setShow] = useState(props.show);
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);
 const [payer,setPayer]=useState();
 // creates a paypal order
 const createOrder = (data, actions) => {
   return actions.order
     .create({
       purchase_units: [
         {
          amount: {      
          value: total ,
           },
         },
       ],
      
       application_context: {
         shipping_preference: "NO_SHIPPING",
       },
     })
     .then((orderID) => {
       setOrderID(orderID);
       return orderID;
     });
 };
 
 // check Approval
 const onApprove = (data, actions) => {
   return actions.order.capture().then(function (details) {
    const {payer}= details;
     setPayer(payer)
     setSuccess(true);
   });
 };
 //capture likely error
 const onError = (data, actions) => {
   setErrorMessage("An Error occured with your payment ");
 };


 useEffect(() => {
  if (success) {
    alert("Payment successful!!");
  }
  },
 [success]
  );

console.log(1, orderID);
console.log(2, success);
console.log(3, ErrorMessage);
 return (
   <PayPalScriptProvider
     options={{
       "client-id":"AZGsKs6_9xSynYZ4jHUK1qoPlK46_KksdexHg8foh3gHl1mZhEBMlVCyxiCIPT9DW-kD-uqHg2H-xwD8",
     }}
   >
     
 
       {show ? (
         <PayPalButtons
           style={{ layout: "vertical" , shape:'pill' , tagline:false }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
       ) : null}
     
   </PayPalScriptProvider>
 );
}