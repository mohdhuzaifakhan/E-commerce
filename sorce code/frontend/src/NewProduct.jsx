import React from 'react'
import Navbar from './component/Navbar'


function NewProduct() {
  return (
    <>
     <Navbar/>
     <div className="container-fluid p-5 m-5 text-center  border bg-light">
              There is no new product available now
     </div>
     </>
  )
}

export default NewProduct