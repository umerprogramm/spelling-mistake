import React from 'react'
import './top_10.css'
import List from './List'
import { useEffect , useState} from 'react'
import * as Realm from "realm-web";


export default function Top_10() {
  const [state ,setstate] =  useState([])
  useEffect(  () => {

   async function fetch(){
    const app = new Realm.App({ id: "spelling_checker-gccby" });
    const credentials = Realm.Credentials.anonymous();
  
    try {
      const user = await app.logIn(credentials);
      const data2 = await user.functions.GetData()
      setstate(data2)
    } catch(err) {
      console.error("Failed to log in", err);
    }
   }
   fetch()
  }, []);
  
  return (
    <div>
    <pre>TOP 10 List</pre>
{
    state.length === 0 ?( <h1>Loading...</h1>):
    state.map(value =>{
      return(
        <>
        {
       <List
       key = {value._id}
       image = {value.image}
       displayName = {value.username}
       score = {value.score}
       />
        }
       </>

      )
        })
  
      }

      
      
    
   
   
    </div>
  )
}
