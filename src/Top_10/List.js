import React from 'react'
import './top_10.css'


export default function List(props) {

  return (
    <>
 
        <ul>
          <li><img src={props.image}/>  <li>{props.displayName}</li></li>
         

        </ul>
  </>
  )
}
