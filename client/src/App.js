import React, {useEffect, useState} from "react"
import './App.css';
import Login from "./Login"
import Home from "./Home"
import ContactUs from "./ContactUs"
import About from "./About"
import {Routes, Route} from "react-router-dom"

function App() {

  const [user, setUser] = useState(null);
  
  
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    function handleLogOut(){
      fetch("/logout", {
        method: 'DELETE'
      })
      .then(setUser(null))
    }


    


    



  return(
    <div className="App">
      {user && <button onClick={handleLogOut}>Logout</button>}
      <Routes>
        <Route exact path="/" element={user ? <Home user={user}/> : <Login onLogin={setUser} />}></Route>
        <Route exact path="/ContactUs" element={<ContactUs />}></Route>
        <Route exact path="/About" element={<About />}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
