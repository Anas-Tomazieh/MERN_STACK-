import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FisrName, setFisrName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState(""); 

//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { FisrName,LastName, email, password,ConfirmPassword };
//         console.log("Welcome", newUser);

        // setFisrName("");
        // setLastName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
//     };
    
    return(
        <form>
            <div>
                <label>FisrName: </label> 
                <input type="text" onChange={ (e) => setFisrName(e.target.value) } />
            </div>
            <div>
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>ConfirmPassword: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>

            <input type="submit" value="Create User" />
<p>Your Form Data</p>
            <p>First Name: {FisrName}</p>
            <p>Last Name: {LastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </form>

    );

};
    
export default UserForm;