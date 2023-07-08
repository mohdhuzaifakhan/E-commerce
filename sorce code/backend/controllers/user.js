const Customer = require('../schema')
const bcrypt = require('bcrypt');

exports.login = (req, res) => {

   try {

      const saltRounds = 3;
      const { email, password } = req.query;
      Customer.findOne({ email }, (err, data) => {
         if (err) {
            console.log("Some error is occuring")
         }
         else {
            bcrypt.compare(password, data.password, function (err, result) {

               if (result) {
                  if (data) {
                     res.json({ data: data , msg : "logged in successfully"});
                  }
               } else {
                  res.json({ err:"Email or password is wrong"})
               }

            });
         }
      })
   } catch (e) {
      console.log(e);
   }
}


exports.signUp = (req, res) => {

   const saltRound = 3;

   const { name, email, password } = req.body;
   console.log(name, email, password)
   bcrypt.hash(password, saltRound, function (err, hash) {

      if (!err) {
         console.log(hash)

         const newCustomer = new Customer({
            name: name,
            email: email,
            password: hash,
         });


         newCustomer.save((err,data) => {
            if (!err) {
               console.log('successfully added')
               res.json({ msg: "successfully register" ,data:data});
            } else {
               console.error(err);
               res.json({ status: 'something went wrong' })
            }
         });

      }


   });




}