import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';



export default function App() {
  return (
    <BrowserRouter>
   
   
      <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/profile' element = {<Profile/>} />
       <Route path='/sign-in' element = {<Signin/>} />
       <Route path='/sign-up' element = {<Signup/>} />
      
      </Routes>
    </BrowserRouter>
  );
}