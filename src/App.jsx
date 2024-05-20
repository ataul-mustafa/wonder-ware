import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/HomeWrapper';
import Products from './components/Products/Products';


function App() {
  
  return (
    <>
      {/* {loading && <Loader />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
