
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';


import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/Fallback';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Inicio from './screens/Inicio';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';
import FormasPago from './components/FormasPago';
import Terminos from './components/Terminos';
import NoFount from './components/NoFount';


function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <>
        <div className="App">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path='/Home' element={<Homescreen />} />
              <Route path="/book/:id/:fromdate/:todate" element={<Bookingscreen />} />
              <Route path="/registro" element={<Registerscreen />} />
              <Route path="/acceso" element={<Loginscreen />} />
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/profile' element={<Profilescreen />} />
              <Route path='/admin' element={<Adminscreen />} />
              <Route path='/' element={<Landingscreen />} />
              <Route path='/formaspago' element={<FormasPago />} />
              <Route path='/terminos' element={<Terminos />} />
              <Route path='/*' element={<NoFount />} />
            </Routes>
          </BrowserRouter>
        </div>

      </>
    </ErrorBoundary>

  );
}

export default App;

