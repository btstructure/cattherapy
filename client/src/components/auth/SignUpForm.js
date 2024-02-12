import React, { useState } from "react";

function SignUpForm({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then(r => r.json())
      .then(d => {
        if (d.errors) {
          alert(d.errors[0]);
        }
      });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">SignUp</h1>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
