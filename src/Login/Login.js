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
        <div className='login'>
            <h1>Wellcome to spelling Checker</h1>
            <button  type="button" className="btn btn-primary mx-2 my-3" onClick={ Singn }>Sign in with Google</button>
      
        </div>
        </>
        )

}
