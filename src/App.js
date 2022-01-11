import { Routes, Route } from 'react-router-dom'
import Header from './pages/shared/Header';
import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Stories from './pages/stories/Stories';
import Home from './pages/home/Home';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stories" element={<Stories />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
