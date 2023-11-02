import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import Navbar from './component/Navbar';
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
    </>
  )

}

export default Home