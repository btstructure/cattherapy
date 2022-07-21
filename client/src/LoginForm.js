import React, { useState } from 'react';


export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    console.log(1)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username:username, password:password}),
    }).then(r => r.json()).then(d => {
      if (d.errors) {
        alert(d.errors[0])
      }
      else{onLogin(d)}
    })
    
      
  }
    

  return (
    <form  onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input className="login-form" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
      <input className="login-form" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
      <button>Submit</button>
    </form>
    
  )
}