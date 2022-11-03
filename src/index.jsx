
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Errors from './pages/Errors'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/rental/:id" element={<Rental />} />
          <Route exact path="/*" element={<Errors />} />
      </Routes> 
      <Footer />
    </Router>
  </React.StrictMode>
)