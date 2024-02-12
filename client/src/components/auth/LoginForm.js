import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(r => r.json())
      .then(d => {
        if (d.errors) {
          alert(d.errors[0]);
        } else {
          onLogin(d);
          navigate('/');
        }
      });
  }

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
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
          <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">
            Submit
          </button>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={navigateToSignUp}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
