import React from 'react'
import GroceryForm from './Components/CreateList/GroceryForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingList from './Components/ShoppingList/ShoppingList'
import Navbar from './Components/Navbar/Navbar'
import AddItem from './Components/AddItem/AddItem'
import Homepage from './Components/Homepage/Homepage'

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createlist" element={<GroceryForm />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App