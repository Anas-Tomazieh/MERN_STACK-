import React from 'react';
const Message = props => {
    const mess = props.message.mess;
    const msgEmit = props.message.user;
    const userName = props.user;
    return (
       
        <div  >
            {}
            <h1 style={{ marginRight: "500px", padding: "10px", clear: "both", color: 'black', borderRadius: "10px", fontSize: " 17px", fontWeight: "540px", width: "100px", backgroundColor: "gray", float: "right" }}>{msgEmit}</h1>
            {}
            <p style={{ marginLeft: "500px", padding: "10px", clear: "both", color: 'black', borderRadius: "10px", fontSize: " 15px", fontWeight: "bold", width: "100px", backgroundColor: "blue", float: "left" }} >{mess}</p>

        </div >
    );
}

export default Message;