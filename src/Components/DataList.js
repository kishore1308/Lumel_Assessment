import React from 'react'
import Data from './Data'

function DataList() {
    const datas = [
        {
            id: 1,
            region: "East",
            country: "London",
            sales: 100,
            quantity: 85,
            profit: 123
        },
        {
            id: 2,
            region: "East",
            country: "Italy",
            sales: 156,
            quantity: 34,
            profit: 45 
        },
        {
            id: 3,
            region: "West",
            country: "Germany",
            sales: 432,
            quantity: 153,
            profit: 421
        },
        {
            id: 4,
            region: "SouthWest",
            country: "US",
            sales: 462,
            quantity: 434,
            profit: 462
        },
        {
            id: 5,
            region: "South",
            country: "Russia",
            sales: 25,
            quantity: 52,
            profit: 451
        },
        {
            id: 6,
            region: "NorthEast",
            country: "India",
            sales: 100,
            quantity: 43,
            profit: 56
        }
    ]
    
    const DataList = datas.map(data => (<Data key= {data.id} data = {data}/>))
    console.log(datas)
    
    return (
        <div>
            {DataList}
        </div>
    )
}

export default DataList
