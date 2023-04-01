import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import MyCarousel from './Components/MyCarousel';
import {Routes,Route} from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <MyCarousel/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
