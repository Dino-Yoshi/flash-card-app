import axios from 'axios';
import React, { useState } from 'react';

function Login({onLog}){ // login function
    const [email, emailSet] = useState(''); // variables for email and pass
    const [password, passSet] = useState('');

    const login = async () => {
        try{
            await axios.post('/api/login', {email, password}); // process request to backend
            const res = await axios.get('/api/me'); // retrieve result from backend
            onLog(res.data); // use successful data to login.
        } catch{
            alert("Incorrect Username or Password.");
        }
    };

    /*
    return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); login();}}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /> 
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      </form>
    </div>
  );
  */

    return(
        <div>
        <h2>Login</h2>
            <form onSubmit = {(e) => {e.preventDefault(); login();}}>
            <input placeholder = "Email" onChange={e=> emailSet(e.target.value)} />
            <input placeholder = "Password" type = "password" onChange={(e => passSet(e.target.value))} />
            <button type = "submit">Login</button>
            </form>
        </div>
                
    );
}
