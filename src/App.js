import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Toy from './Toy';
import { createContext, useState } from 'react';


export const UserLogin = createContext()

function App() {
  var [logname, setlogname] = useState('')
  var [logout, setlogout] = useState(false)
  var [val,setval] = useState(1)

  return (
    <div className='App'>
      <UserLogin.Provider value={{logname,setlogname,logout,setlogout,val,setval}}>
        <Toy></Toy>
      </UserLogin.Provider>
    </div>
  );
}

export default App;
