import Modal from './components/modal';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const isEnabled = user.length > 0 && password.length > 0;   

  const handleSubmit = event => {
    setShow(true);
    if(!isEnabled){
      setUser(event.target.value);
      setPassword(event.target.value);
    }
      
      setPassword("");
      document.querySelector('.username').value="";
      document.querySelector('.password').value="";
  }
  return (
    <div className="App">
      <div className= "user_login">
        <input 
          type= "text"
          className= "username"
          placeholder= "Enter UserName"
          onChange= {event => setUser(event.target.value)}
        />
        <input 
          type= "password"
          className= "password"
          placeholder= "Enter PassWord"
          onChange= {event => setPassword(event.target.value) }
        />
        {isEnabled ?
        <div>
        <button className= "show-modal" onClick= {handleSubmit}>Login</button>
        </div> :
        <div>
        <button disabled = {!isEnabled} className= "disable-showmodal" onClick= {handleSubmit}>Login</button> 
        </div>}
        <Modal user= {user} onClose= {() => setShow(false)} show= {show} />
      </div>
    </div>
      
  );
}

export default App;
