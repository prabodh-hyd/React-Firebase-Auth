import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import Home from './Components/Home';
import { BrowserRouter, redirect , Routes, Route } from 'react-router-dom';
import { firebasApp } from './firebase-config';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {ToastContainer, toast } from 'react-toastify';



function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // let navigate = useNavigate();

  const handleAction = (id) =>{
    const authentication = getAuth(firebasApp);
    // const authentication = auth;
    console.log(id);
   
    if(id === 1){
      signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        redirect('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        console.log(error.code);

        if(error.code === 'auth/worng-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      })
    }

    if(id === 2){
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) =>{
        redirect('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) =>{
        if(error.code === 'auth/email-already-in-use'){
          toast.error('Email Already in use');
        }
      })
    }

  }


  useEffect(() =>{
    let authToken = sessionStorage.getItem('Auth Token');

    if(authToken){
      redirect('/home')
    }
  }, [])
  return (
    <div>
      <h2>DB</h2>
       <ToastContainer />
      <BrowserRouter>
      <Routes>
      <Route
            path='/'
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />}
          />
           <Route
            path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />}
          />
          <Route
               path='/home' element={<Home />}       
          />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
