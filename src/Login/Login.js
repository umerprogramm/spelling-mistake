import React from 'react'
import './login.css'
import { auth, provider } from '../firebase/Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/actions/action';
import * as Realm from "realm-web";



export default function Login() {

    const Dispatch = useDispatch()




   

         function Singn(){
    
          signInWithPopup(auth,provider)
          .then( async (result) => {
            const data = {
              email : result.user.email,
              image : result.user.photoURL,
              displayName : result.user.displayName
            }
            Dispatch(logIn({login : "login" }))
            localStorage.setItem('email' , result.user.email )
            const app = new Realm.App({ id: "spelling_checker-gccby" });
            const credentials = Realm.Credentials.anonymous();
            
            try {
              const user = await app.logIn(credentials);
              const GetUsers = await user.functions.InsetUsers(data)
              console.log(GetUsers)
            } catch(err) {
              console.error("Failed to log in", err);
          }
            
                      
             
         
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
