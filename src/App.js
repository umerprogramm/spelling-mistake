import './App.css';
import Login from './Login/Login';
import Header from './header/Header';
import Main from './Main/Main';
import { useSelector } from 'react-redux';



function App() {
  const login = useSelector((state)=>state.ChangeState.login)

  return (
    <>
    {
      login === 'login'?
      <>
           <Header/>
           <Main/></>:
           <Login/>
           
           
   
          }

    </>
  );
}

export default App; 
