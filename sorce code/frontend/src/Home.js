import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import { data } from './data';
import Navbar from './component/Navbar';
function Home() {

  const [dataBaseData, setData] = useState(data);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("http://localhost:8080/admin")
      const res = await response.json();
      const mainData = data.concat(res.data);
      setData(mainData);

    }

    fetchData();
  }, [])



  return (
    <>
    <Navbar/>
    <div className="container my-3 mx-auto">
      <div className="row justify-content-center">
        <Card data={dataBaseData} />
      </div>
    </div>
    </>
  )

}

export default Home