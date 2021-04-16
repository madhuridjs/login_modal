import Modal from './components/modal';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const isEnabled = user.length > 0 && password.length > 0;
  return (
    <div className="App">
      <div className= "user_login">
        <input 
          type= "text"
          className= "username"
          placeholder= "Enter UserName"
          onChange= {event => setUser(event.target.value) }
        />
        <input 
          type= "password"
          className= "password"
          placeholder= "Enter PassWord"
          onChange= {event => setPassword(event.target.value) }
        />
        {isEnabled ?
        <div>
        <button className= "show-modal" onClick= {() => setShow(true)}>Login</button>
        </div> : <div>
        <button disabled = {!isEnabled} className= "disable-showmodal" onClick= {() => setShow(true)}>Login</button> 
        </div>}
        <Modal user= {user} onClose= {() => setShow(false)} show= {show} />
      </div>
    </div>
      
  );
}

export default App;
