import React from 'react'
import { useMoralis, useNewMoralisObject } from "react-moralis";
import './login.css'
import { auth, provider } from '../firebase/Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/actions/action';


export default function Login() {
    const { save } = useNewMoralisObject("Username");
    const Dispatch = useDispatch()
    const { authenticate, isAuthenticated  } = useMoralis();



    const login = async () => {
      if (!isAuthenticated) {

        await authenticate()
          .then(function () {
  
            Dispatch(logIn({login : "login" }))

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

        async function Singn(){
    
          signInWithPopup(auth,provider)
          .then((result) => {
            const data = {
              email : result.user.email,
              image : result.user.photoURL
            }
            save(data, {
              onSuccess: (email) => {
                Dispatch(logIn({login : "login" }))
                localStorage.setItem('email' , result.user.email )
              },
              onError: (error) => {
            
                alert("Failed to create new object, with error code: " + error.message);
              },
            });           
             
         
         }).catch((error) => alert("sorry,you cannot sign in", error));
            
         
          }

        
        return (
        <>
        <div className='login'>
            <h1>Wellcome to spelling Checker</h1>
            <button  type="button" className="btn btn-primary mx-2 my-3" onClick={ Singn }>Sign in with Google</button>
            <br/>or
            <button  type="button" className="btn btn-primary mx-2 my-3" onClick={ login }>Sign in with Metamask 🦊</button>
      
        </div>
        </>
        )

}
