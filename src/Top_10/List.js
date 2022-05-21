import React from 'react'
import './top_10.css'


export default function List(props) {

  return (
    <>
 
        <ul>
          <li ><img src={props.image}/><li>{props.displayName} <span className='score'>Score : {props.score}</span></li></li>
         

        </ul>
  </>
  )
}
