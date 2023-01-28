import React from 'react'
import title from "../data/sidebarTitle"

function Sidebar() {
    return (

        <div className="col-3 bg-light sidebar">
            <h4>Products List</h4>
            <ul>
                {
                    title.map((value ,index) => {
                        return (
                            <li  key={index} >{value}</li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default Sidebar
