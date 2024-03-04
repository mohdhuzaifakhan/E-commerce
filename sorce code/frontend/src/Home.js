import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
function Home() {
  const [text , setText] = useState()
  // console.log(text)
  return (
    <>
      <Navbar setSearchItem={setText} />
      <div className="container my-3 mx-auto">
        <div className="row justify-content-center">
          <Card text={text}/>
        </div>
      </div>
      <Footer/>

    </>
  )

}

export default Home
