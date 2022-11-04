import React from 'react'
import Reklama from './components/Reklama/Reklama'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Product/>
      <Reklama />
    </>
  )
}
