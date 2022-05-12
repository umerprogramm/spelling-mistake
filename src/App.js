import './App.css';
import Login from './Login/Login';
import Header from './header/Header';
import Main from './Main/Main';
import { useSelector } from 'react-redux';
import Main2 from './Main2/Main2'



function App() {
  const login = useSelector((state)=>state.ChangeState.login)

  return (
    <>
    {
      login === 'login' || localStorage.getItem('email')?
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
