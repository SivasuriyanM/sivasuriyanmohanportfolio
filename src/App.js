
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Homeport';
import Education from './pages/Educationport';
import Experince from './pages/Experince';
import Projects from './pages/Projectsport';
import Contact from './pages/Contactport';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className='container'>
    <BrowserRouter>
    
    <NavBar/>
    <Routes>
      
      <Route path='/app' element={<Home />}/>
      <Route path='/edu' element={<Education/>}/>
      <Route path='/exp' element={<Experince/>}/>
      <Route path='/pro' element={<Projects/>}/>
      <Route path='/con' element={<Contact/>}/>
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
