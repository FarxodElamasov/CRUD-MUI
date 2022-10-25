import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import PersistentDrawerLeft from './components/Drawer/Drawer'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import EditPage from './components/EditPage/EditPage'

export default function App() {
  return (
    <>
      <Router>
        <PersistentDrawerLeft />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/edit' element={<EditPage />} />
        </Routes>
      </Router>
    </>
  )
}
