import React, { useState } from 'react';
import './App.css';

import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
import Contact from "./components/ContactComponent";
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import { DISHES } from './shared/dishes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [dishes, setDishes] = useState(DISHES);
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route exact path='/menu' element={<Menu dishes={dishes} />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
