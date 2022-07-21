import React, { useState } from "react";


function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    console.log(1)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username:username, password:password, password_confirmation:passwordConfirmation }),
    }).then(r => r.json()).then(d => {
      if (d.errors) {
        alert(d.errors[0])
      }
    })
    
      
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"></input>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
      <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="confirm password"></input>
      <button>Submit</button>
    </form>
    
  )
}

export default SignUpForm;