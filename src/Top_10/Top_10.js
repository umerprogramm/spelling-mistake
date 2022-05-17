import React from 'react'
import './top_10.css'
import List from './List'
import { useMoralisQuery } from 'react-moralis';


export default function Top_10() {
  const { data, error, isLoading } = useMoralisQuery("Username");
  return (
    <>
    <pre>TOP 10 List</pre>
    {data.map(value =>{
      return(
        <>
       <List
       username = {value.attributes.email}
       image = {value.attributes.image}
       />
       </>
      )
    })
  }

   
   
    </>
  )
}
