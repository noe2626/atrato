import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/NavBar';
import Dashboard from './Pages/Dashboard.js'
import UserUpdateForm from './Pages/UserUpdate';

const App = () => (
  <div>
    
    <BrowserRouter>
    <Navbar fixed="top"></Navbar>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Users/:id" element={<UserUpdateForm />} />
      </Routes>
    </BrowserRouter>
  </div>

)

export default App;
