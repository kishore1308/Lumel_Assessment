import React from 'react'

function Data({data}) {
    return (
        <div>
        <ul>
            <div>Region: {data.region},</div>
            <div>Country: {data.country},</div>
            <div>Sales: {data.sales},</div>
            <div>Quantity: {data.quantity},</div>
            <div>Profit: {data.profit}</div>
        </ul>
        </div>
    )
}

export default Data
