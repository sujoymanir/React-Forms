import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './component/SignUpForm.jsx/SignUpForm'
import Authenticate from './component/Authenticate.jsx/Authenticate'
import SignUpForm from './component/SignUpForm.jsx/SignUpForm'


function App() {
  const [token, setToken] = useState(null);

  return (
    <>
            
      <SignUpForm token={token} setToken={setToken} />
            
      <Authenticate token={token} setToken={setToken} />
          
    </>
  );
}

export default App
