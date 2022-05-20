import React from 'react'
import './login.css'
import { auth, provider } from '../firebase/Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/actions/action';


export default function Login() {

    const Dispatch = useDispatch()




   

        async function Singn(){
    
          signInWithPopup(auth,provider)
          .then((result) => {
            const data = {
              email : result.user.email,
              image : result.user.photoURL,
              displayName : result.user.displayName
            }
            Dispatch(logIn({login : "login" }))
            localStorage.setItem('email' , result.user.email )
                      
             
         
         }).catch((error) => alert("sorry,you cannot sign in", error));
            
         
          }

        
        return (
        <>
        <div className='login'>
            <h1>Wellcome to spelling Checker</h1>
            <button  type="button" className="btn btn-primary mx-2 my-3" onClick={ Singn }>Sign in with Google</button>
           
      
        </div>
        </>
        )

}
