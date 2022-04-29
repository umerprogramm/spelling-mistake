const initialize = {
    login : 'Nothing',
 
}
 const ChangeState =  (state=initialize,action )=>{
  
      if(action.type === "CHANGE"){
        return {
               login : state.login = action.login,
              
          }
        }

      else{
          return {  
            
            login : state.login,
          
        }
      }


}
 

export  default ChangeState