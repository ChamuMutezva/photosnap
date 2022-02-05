import { useEffect } from 'react';
import {  Routes, Route , useLocation } from 'react-router-dom'
import Header from './pages/shared/Header';
import Footer from './pages/shared/Footer';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Stories from './pages/stories/Stories';
import Home from './pages/home/Home';
import { DataProvider } from './pages/context/Context';
import './sass/App.scss';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div className="App">
      <Header />
     
      <DataProvider>
        
          <ScrollToTop />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />

          </Routes>
        
        <Footer />
      </DataProvider>

    </div>
  );
}

export default App;
