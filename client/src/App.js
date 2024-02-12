import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Authentication from "./components/auth/Authentication";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import SignUpForm from "./components/auth/SignUpForm";
import './App.css';


function Logout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setIsLoggedOut(true));
  }, []);

  if (isLoggedOut) {
    return (
      <div className="my-4">
        <p>You have been successfully logged out.</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return <p>Logging out...</p>;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((user) => setUser(user))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {user && <Link to="/logout">Logout</Link>}
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Authentication />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/signup"
          element={<SignUpForm onSignUp={setUser} />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
