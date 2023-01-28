import React from 'react'
import Contantbar from './Contantbar'
import Sidebar from './Sidebar'

function Main() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <Contantbar/>
        </div>
      </div>
    </div>
  )
}

export default Main
