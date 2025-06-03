
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Homeport';
// import Education from './pages/Educationport';
// import Experince from './pages/Experince';
// import Projects from './pages/Projectsport';
// import Contact from './pages/Contactport';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';


// function App() {
  
//   return (
//     <div className='container'>
//     <BrowserRouter>
    
//     <NavBar/>
//     <Routes>
      
//       <Route path='/app' element={<Home />}/>
//       <Route path='/edu' element={<Education/>}/>
//       <Route path='/exp' element={<Experince/>}/>
//       <Route path='/pro' element={<Projects/>}/>
//       <Route path='/con' element={<Contact/>}/>
     
//     </Routes>
//     <Footer/>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React, { Suspense, useMemo, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Homeport'));
const Education = React.lazy(() => import('./pages/Educationport'));
const Experince = React.lazy(() => import('./pages/Experince'));
const Projects = React.lazy(() => import('./pages/Projectsport'));
const Contact = React.lazy(() => import('./pages/Contactport'));

function App() {
  // Example: Memoized callback for logging route changes (for demo)
  const onRouteChange = useCallback((route) => {
    console.log('Navigated to:', route);
  }, []);

  // Example: Memoized value for context
  const contextValue = useMemo(() => ({
    user: { name: 'Sivasuriyan Mohan' },
    onRouteChange,
  }), [onRouteChange]);

  return (
    <AppProvider value={contextValue}>
      <ErrorBoundary>
        <div className='container'>
          <BrowserRouter>
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/app' element={<Home />} />
                <Route path='/edu' element={<Education />} />
                <Route path='/exp' element={<Experince />} />
                <Route path='/pro' element={<Projects />} />
                <Route path='/con' element={<Contact />} />
              </Routes>
            </Suspense>
            <Footer />
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;