    import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';

import Pic from './components/card/Pic';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Helmet , HelmetProvider } from 'react-helmet-async';

import About from './components/about/About';
import Servic from './components/servic/Servic';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';















function App() {



  return (
    <>
  
      <HelmetProvider>
        <Helmet>
        <title>
         Home
        </title>
        </Helmet>
        
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Header/>} >
      

    
        <Route index element={<Pic/>} />
       
          <Route path='about' element={<About />} />
          <Route path='servic' element={<Servic />} />
          <Route path='contact' element={<Contact />} />

        </Route>
       
       

     </Routes>
    
     
     </BrowserRouter>
     
   </HelmetProvider>
  
     
      <Footer />
    
    </>
  )
}


export default App;
