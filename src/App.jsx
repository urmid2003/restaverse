import './App.css';
import Login from './components/login';
import Logout from './components/logout';

import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import {useEffect} from 'react';
import { gapi } from 'gapi-script';
import MainPage from './pages/MainPage';
import FetchData from './components/FetchData';
import { ContactSupportTwoTone } from '@mui/icons-material';
import { ContactUs } from './pages/Contactus';
import Popup from './components/Popup';
const clientId = "836163887227-8stlpjaauf1m1r08rulnolnlgbobub0s.apps.googleusercontent.com";

// this app.jsx where i have used browser router for routing pages and components

function App() {
  
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginPage/>} /> 
        <Route path="/logout" element={<logout/>}/>
        <Route path="/MainPage" element={<MainPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/FetchData" element={<FetchData />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/Contactus" element={<ContactUs/>} />

        
        
       
       
        

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
