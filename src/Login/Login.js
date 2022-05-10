import React from 'react'
import { useNewMoralisObject } from "react-moralis";
import { useMoralisQuery } from "react-moralis"
import './login.css'
import { auth, provider } from '../firebase/Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/actions/action';


export default function Login() {
    const { save } = useNewMoralisObject("Username");
    const Dispatch = useDispatch()



  // const sumbit = ()=>{
  //   // const data = {
  //   //   email: 'umer@gmail.com',
  //   //   username: ' Umer'
      
  //   //       };

         
  //       }

        async function Singn(){
    
          signInWithPopup(auth,provider)
          .then((result) => {
            const data = {
              email : result.user.email
            }
            save(data, {
              onSuccess: (email) => {
                // Execute any logic that should take place after the object is saved.
                Dispatch(logIn({login : "login" }))
                localStorage.setItem('email' , result.user.email )
              },
              onError: (error) => {
                // Execute any logic that should take place if the save fails.
                // error is a Moralis.Error with an error code and message.
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
      
        </div>
        </>
        )

}
