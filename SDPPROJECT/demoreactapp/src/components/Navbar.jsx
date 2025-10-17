import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      
     <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/registration">Registration</Link>
  <Link to="/login">Login</Link>


     <Routes>
      <Route path="/"  element={<h3>Home Page</h3>}/>
  <Route path="/about" element={<h3>About Page</h3>}/>
  <Route path="/registration" element={<h3>Registration Page</h3>}/>
  <Route path="/login" element={<h2>Login Page</h2>}/>
     <Route path="*" element={<h2>Page Not Found</h2>}/>
     </Routes>


    </div>
  )
}
