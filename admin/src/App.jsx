import React, { useState } from 'react'
import './App.css'
import DisplayButtons from './components/Displaybuttons/DisplayButtons'
import AllProduct from './components/AllProduct/AllProduct'
import AddProduct from './components/AddProduct/AddProduct'

const App = () => {

  const [display, setDisplay] = useState('All')

  return (
    <div>
      <DisplayButtons setDisplay={setDisplay} />
      
      {display === 'All' && <AllProduct />}
      {display === 'Add' && <AddProduct />}
    </div>
  )
}

export default App
