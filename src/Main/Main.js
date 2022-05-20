import React, { useState , useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Link } from 'react-router-dom';
import * as Realm from "realm-web";


export default function Main() {
  const [state ,setstate]  = useState(true)
  const [updatingValue , setupdatingValue] =  useState('')
  const [tellme , setTellme] = useState('')
  const [congratulation , setcongratulations] = useState(false)
  const [showme , setshowme] = useState('')

  const { speak } = useSpeechSynthesis();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
        'X-RapidAPI-Key': '5057813bc5mshf5185e29384ee04p11c105jsna35f6923a250'
      }
    };
    
    fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=5', options)
      .then(response => response.json())
      .then(response =>{
        setTellme(response[1])
          
      
      })
      .catch(err => console.error(err));
     
  }, [showme]);


  const spellingChecker = ()=>{

         if(updatingValue === ''){
           setstate(true)
         }
        else if(updatingValue !== tellme){
          setstate(false)
      }else{
        setstate(true)
        setcongratulations(true)

      }
      


      }
      const Speak = ()=>{
        speak({text : tellme })
        setshowme('')
      }
 const LoseTheGame =()=>{
  setshowme(tellme)

}

const Check = async ()=>{
  const app = new Realm.App({ id: "spelling_checker-gccby" });
  const credentials = Realm.Credentials.anonymous();

  try {
    const user = await app.logIn(credentials);
    const data2 = await user.functions.GetData()
    console.log(data2)
  } catch(err) {
    console.error("Failed to log in", err);
  }



}

  return (
    <>

      <div id='input_div'>
        {

          congratulation !== false ? 
          <h1 style={{color : 'green',marginBottom:'15px'}}>Congratulation 🎉</h1>:
          <>
          {
            showme === '' ?
            <h1 style={{display : 'none'}}>{showme}</h1>:
            <h1 style={{display : 'block'}}  >{showme}</h1>


          }
        <img src='https://static.thenounproject.com/png/1616157-200.png'onClick={ Speak }/>
          
        </>
   
        }
        {
              state === false ?
              <div className="alert alert-danger alert-dismissible fade show mx-5" role="alert">
         <strong>wrong spelling!</strong> You are typing wrong spelling
         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true" onClick={()=>{setstate(true)}}>&times;</span>
         </button>
         </div>:
            <div style={{display : 'none'}} class="alert alert-danger alert-dismissible fade show mx-5" role="alert">
       <strong>wrong spelling!</strong> You are typing wrong spelling
       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true" onClick={()=>{setstate(true)}}>&times;</span>
       </button>
       </div>
        }
   

    <input  onChange={e =>{setupdatingValue(e.target.value)}}type="text" className="form-control " placeholder="Enter correct spelling" aria-label="Username" aria-describedby="addon-wrapping"/>

    <button  onClick={spellingChecker} type="button" className="btn btn-success mx-2 my-2">Done</button>
    <button type="button" className="btn btn-primary mx-2" onClick={LoseTheGame}>I want lose the game</button>
    <button onClick={Check}>Check</button>


    <div class="footer">
      <span>Score : 0 </span>
  <Link  class='Link' to='/top_10'><img src='https://www.svgrepo.com/show/39675/trophy.svg'/></Link>
</div>
        
  </div>
  </>
  )
}
