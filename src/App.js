import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles'; 

import  Home  from './pages/Home';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import  Add  from './pages/Add';
import  NoMatch  from './pages/NoMatch';

function App() {

  return (       
    <Router>
      <GlobalStyle/>
      
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<Add />} />
        <Route path='/nomatch' element={<NoMatch />} />
      </Routes>
    </Router>



  );
}

export default App;


