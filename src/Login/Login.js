import React from 'react'
import { useNewMoralisObject } from "react-moralis";
import { useMoralisQuery } from "react-moralis";



export default function Login() {
    const { save } = useNewMoralisObject("EthTransactions");


  const { fetch } = useMoralisQuery(
    "Username",
    (query) => query.equalTo("username", "Umer"),
    [],
    { autoFetch: false }
  );



const singleQuery = () =>{
    fetch({
      onSuccess: (result) => console.log(result),
      onError: (error) => {
          
        alert("Failed to create new object, with error code: " + error.message);
      },
    });
}
   

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
  return (
    <div>

        <button onClick={sumbit}>Click</button>
        <button onClick={singleQuery}>Call The Code</button>
    </div>
  )
}
