import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser (e) {
    e.preventDefault();    
    const response = await fetch("http://localhost:1111/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username'></input>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email'></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password'></input>
        <input type="submit" value="Register"></input>
      </form>
    </div>
  );
}

export default App;
