const mongoose = require ('mongoose');
// const  url ="mongodb+srv://mohdhuzaifakhan:mohdhuzaifakhan@cluster0.o0unkga.mongodb.net/customer?retryWrites=true&w=majority"
const url = "mongodb://0.0.0.0:27017/costumer"
mongoose.connect(url,{
    useNewUrlParser: true
  }).then(()=>{
    console.log("connetion successful")
  }).catch((err)=>{
    console.log("No connection");
  });



//"mongodb://localhost:27017/costumer"