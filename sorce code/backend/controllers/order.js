const Order = require('../orderSchema')


exports.order = (req, res) => {
  const { fullName, phoneNumber, houseNumber, street, city, Pincode, orderProduct, qty, payment, total } = req.body;

  const newOrder = new Order({
    order: {
      name: fullName,
      phone: phoneNumber,
      house_Number: houseNumber,
      village_or_street: street,
      town_city: city,
      pincode: Pincode
    },
    orderItems: {
      qty: qty,
      product: orderProduct

    },
    payment: {
      paymentMethod: payment,
    },
    totalPrice: total

  })

  console.log(newOrder);
  newOrder.save().then((data) => {
    // console.log(data)
    res.json({ msg: "order confirm successfully" });
  }).catch((err) => {
    console.error(err);
    res.json({ status: 'something went wrong' })
  })

  //  res.json({msg:"Order confirm successfully!"})

}