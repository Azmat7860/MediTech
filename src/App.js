import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import MyCarousel from './Components/MyCarousel';
import {Routes,Route} from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Services from './Components/Services';

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
      <br/>
      <Services/>
      <br />
      <Footer />
    </div>
  );
}

export default App;
