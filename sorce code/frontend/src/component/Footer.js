import React from 'react'

function Footer() {
  return (
       
        <div className='container-fluid bg-light text-dark fixed-bottom p-2 w-100 text-center'> @Copyright  {new Date().toDateString()}</div>
  )
}

export default Footer