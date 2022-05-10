import React from 'react'
import './header.css'

export default function Header() {
 
  function Logout(){
    localStorage.removeItem("email")
    window.location.reload();

  }


  return (
    <>
      
      <div className='header'>
        <h3>Spelling Challenge</h3>
        <button onClick={Logout}>Logout</button>

        </div>
        </>
  )
}
