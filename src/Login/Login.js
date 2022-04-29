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
    const { data } = useMoralisQuery("Username");
    const Dispatch = useDispatch()



  const sumbit = ()=>{
    const data = {
      email: 'umer@gmail.com',
      username: ' Umer'
      
          };

          save(data, {
            onSuccess: (obj) => {
              alert("New object created with objectId: " + obj.id);
            },
            onError: (error) => {
              
              alert("Failed to create new object, with error code: " + error.message);
            },
          });
        }

        async function Singn(){
    
          signInWithPopup(auth,provider)
            .then((result) => {
           if(result.user.email){
            Dispatch(logIn({login : "login" }))
             localStorage.setItem('email' , result.user.email )
           }else{
             alert('Sorry, You cannot login')
           }
          
            
        
        })
            .catch((error) => alert("sorry,you cannot sign in", error));
            
         
          }

        
        return (
        <>
        <div>
            <h1>Wellcome to spelling Checker</h1>
          <button className='btn' onClick={Singn}><img src='data:image/jpeg;base64,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'/><p>Sign in with Google</p></button>
      
        </div>
        </>
        )

}
