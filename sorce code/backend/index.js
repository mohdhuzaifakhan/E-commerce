require('./mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');



//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())




//api routes
app.use('/',require('./routes/user'))
app.use('/',require('./routes/admin'))
app.use('/',require('./routes/addCartItem'));
app.use('/',require('./routes/order'));
app.use('/',require('./routes/payment'));



app.listen(8080, () => {
   console.log("Runniing on 8080")
})


