import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Room from './pages/room'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
