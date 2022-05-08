import React from 'react'
import SignIn from './Components/SignIn/SignIn'
import Signup from './Components/SignUp/Signup'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUpDoctor from './Doctors/SignUp/SignUpDoctor';
import SignInDoctor from './Doctors/SignIn/SignInDoctor';
import Home from './Home Page/Home';
import PetDetails from './Components/Details/PetDetails';
import Options from './Options/Options';
import Payment from './Payment/Payment';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signUp' element={<Signup/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='signUpDoctor' element={<SignUpDoctor/>} />
        <Route path='/signInDoctor' element={< SignInDoctor/>} />
        <Route path="/petDetails" element={<PetDetails/>} />
        <Route path='/options' element={<Options />}/>
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    </div>
  )
}

export default App