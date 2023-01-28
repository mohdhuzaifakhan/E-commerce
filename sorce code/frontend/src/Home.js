import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import {data} from './data';

function Home() {

  const [dataBaseData , setData] = useState(data);

  useEffect( ()=>{
   
   async function fetchData(){
      const response = await fetch("http://localhost:8080/admin")
      const res = await response.json();
      const mainData = data.concat(res.data);
       setData(mainData);
      
    }
   
    fetchData();
  },[])

  

  return (
    
        <div className="container">
          <div className="row justify-content-between">
            <div className="container-fluid">
              <Card data={dataBaseData}/>
            </div>
          </div>
        </div>
    )
  
}

export default Home