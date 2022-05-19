import React from 'react'
import './top_10.css'
import List from './List'



export default function Top_10() {

  return (
    <div>
    <pre>TOP 10 List</pre>
    {data.map(value =>{
      return(
        <>
       <List
       image = {value.attributes.image}
       displayName = {value.attributes.displayName}
       />
       </>

      )
        })
  }

   
   
    </div>
  )
}
