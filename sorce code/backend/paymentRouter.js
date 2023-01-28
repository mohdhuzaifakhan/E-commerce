const express = require('express');
require('dotenv').config;
const PaytmChecksum = require("./PaytmChecksum");
const app = express();


app.post('/payment',(req,res)=>{

const {amount,email} = req.body;
var params = [];

params["MID"] = process.env.MERCHANT_ID
params["EMAIL"] = email
params["AMOUNT"] = amount
params["ORDERID"] ='1457821'


var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.MERCHANT_KEY);
paytmChecksum.then(function(checksum){
   params['CHECKSUMHASH'] = checksum
   res.json(params);
   console.log('successful');
}).catch(function(error){
	console.log(error);
});
})


module.exports = app;