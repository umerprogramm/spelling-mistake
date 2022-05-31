import React from 'react'
import './login.css'
import { auth, provider } from '../firebase/Firebase'
import {  signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { logIn } from '../state/actions/action';
import * as Realm from "realm-web";
import image from './graph.png' 



export default function Login() {

    const Dispatch = useDispatch()

    const {useState , useEffect } = React


    const [state , setstate] = useState()


     




   

  function Singn(){
  
          signInWithPopup(auth,provider)
          .then( async (result) => {
            const data = {
              email : result.user.email,
              image : result.user.photoURL,
              displayName : result.user.displayName,
      
            }
            const app = new Realm.App({ id: "spelling_checker-gccby" });
            const credentials = Realm.Credentials.anonymous();
            
            try {
              const user = await app.logIn(credentials);
              const data2 = await user.functions.GetUsers()
              if(data2.length === 0){
                    const GetUsers = await user.functions.InsetUsers(data)
                    console.log(GetUsers)
                    window.location.reload();
                    
              
                  
              
              }else{
                localStorage.setItem('email' , result.user.email )
                window.location.reload();

                
              }
              

            
            } catch(err) {
              console.error("Failed to log in", err);
          }
        
            
                      
             
         
        }).catch((error) => alert("sorry,you cannot sign in", error));
      
        
          }

        
        return (
          <div className='container'>
        <div className='login'>
            <h1>Wellcome to spelling Checker</h1>
            <p>Play and check your spelling Skill and get award To start the Game please Sign with Google</p>
            <button  type="button" className="btn btn-primary mx-2 my-3" onClick={ Singn }>Sign in with Google</button>

      
        </div>
        </div>
        )

}
