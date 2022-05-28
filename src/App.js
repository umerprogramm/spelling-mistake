import './App.css';
import Login from './Login/Login';
import Header from './header/Header';
import { useSelector } from 'react-redux';
import Main2 from './Main2/Main2'
import { useState , useEffect } from 'react';
import * as Realm from "realm-web";




function App() {
  const [state ,setstate] = useState(false)

  useEffect(  () => {
    const fetchData = async ()=>{
      const app = new Realm.App({ id: "spelling_checker-gccby" });
      const credentials = Realm.Credentials.anonymous();
    
      try {
        const user = await app.logIn(credentials);
        const data2 = await user.functions.GetUsers()
      data2.map( value =>{
        if(value.email === localStorage.getItem('email') ){
          setstate(true)
        }
      })
      } catch(err) {
        console.error("Failed to log in", err);
      }
    }
    fetchData()
    
  }, []);
  const login = useSelector((state)=>state.ChangeState.login)

  return (
    <>
    {
    login==='login' || state === true ?
      <>
           <Header/>
           <Main2/>
   
           </>:
           <Login/>
           
           
   
          }

    </>
  );
}

export default App; 
