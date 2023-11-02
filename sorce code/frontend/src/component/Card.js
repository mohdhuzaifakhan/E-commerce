import React from 'react'
import { useEffect, useState } from 'react';
import { data } from '../data'
import CardDetails from './CardDetails';

function Card({ text }) {
    // console.log(text)
    const [dataBaseData, setData] = useState(data);
    const [searchItems, setSearchItems] = useState([])
    useEffect(() => {

        async function fetchData() {
            const response = await fetch('http://localhost:8080/admin')
            const result = await response.json()
            // console.log(result.data)
            setData(result.data)
        }
        fetchData()

    }, [])

    useEffect(() => {
        setSearchItems(data.filter(function (item) {
            return item.description.search(text) != -1 
        }))
    }, [text])
    console.log(text)
    console.log(searchItems)

    return (
        <div className='row'>

            {
                searchItems.map((item, index) => {
                    // console.log(item)
                    return (
                        <>
                            <CardDetails key={index} item={item} />
                        </>

                    )

                })
            }
            {
                dataBaseData.map((item, index) => {
                    // console.log(item)
                    return (
                        <>
                            <CardDetails key={index} item={item} />
                        </>

                    )

                })
            }
        </div>
    )
}

export default Card
