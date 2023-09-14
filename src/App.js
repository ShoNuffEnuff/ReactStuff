import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PetGroupCard from './components/PetGroupCard';


function App ()  {
    return (
        <Router>
      {/*<Navbar />*/}
      <Header title="Soul taker industries"/>
            <RegistrationForm />
            <LoginForm />
            <h1>Soultaker App</h1>
      <Routes>
      <Route path ="/"  element={<Home />} />
      <Route path ="/about" element={<About />} />
      <Route path ="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
      
                </Routes>
            
            
            <PetGroupCard></PetGroupCard>
    </Router >

          
     
    
  );
}

export default App;
