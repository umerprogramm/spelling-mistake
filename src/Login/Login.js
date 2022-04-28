import React from 'react'
import { useNewMoralisObject } from "react-moralis";
import { useMoralisQuery } from "react-moralis"



export default function Login() {
    const { save } = useNewMoralisObject("Username");
    const { data, error, isLoading } = useMoralisQuery("Username");

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
      


        if (error) {
          return <span>🤯</span>;
        }
        
        if (isLoading) {
          return <span>🙄</span>;
        }
        
        return (
        <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
        )

}
