import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import AddWord from "./components/AddWord"
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<AddWord/>}  />
      <Route path="/search" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App