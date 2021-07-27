import React from 'react'

function Color(props) {
    return (
        <div>
            <p style={{color:props.color,backgroundColor:props.back}}>{isNaN(props.anas)? <p>the Word is : {props.anas}</p>:<p>the Number is :{props.anas}</p>}</p> 
            </div>
    )
}

export default Color
