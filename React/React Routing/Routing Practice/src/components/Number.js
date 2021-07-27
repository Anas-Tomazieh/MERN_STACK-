import React from 'react'

function Number(props) {
    return (
        <div>
            {isNaN(props.asds)? <p>the Word is : {props.asds}</p>:<p>the Number is :{props.asds}</p>}
            {/* isNaN(+"35") is false, isNaN(+"hello") is true */}
        </div>
    )
}

export default Number
