import Modal from './components/modal';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
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
        />
        {}
        <button className= "show-modal" onClick= {() => setShow(true)}>Login</button>
        <Modal user= {user} onClose= {() => setShow(false)} show= {show} />
      </div>
    </div>
      
  );
}

export default App;
