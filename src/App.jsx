import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Design from './pages/Design';
import UserInterface from './pages/UserInterface';
import Functionality from './pages/Functionality';
import Conclusions from './pages/Conclusions';
import Contributors from './pages/Contributors';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-baby-blue">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/ui" element={<UserInterface />} />
            <Route path="/functionality" element={<Functionality />} />
            <Route path="/conclusions" element={<Conclusions />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
