// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../dist/output.css'
import './input.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/TheBloomTimes' element={<Homepage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
