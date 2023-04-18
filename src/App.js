import './App.css';
import './css/style.css';
import Navbar from './Components/Header';
import Home from './pages/Home';
import MyCarousel from './Components/MyCarousel';
import {Routes,Route} from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import BookingSteps from './pages/BookingSteps';
import Testimonial from './pages/Testimonial';
import Partner from './pages/Partner';
import Footer from './Components/Footer';
import CallToAction from './Components/CallToAction';

function App() {
  return (
    <div className="App">
      {/* <div id="preloader"></div>  */}
      <Navbar/>
      <Home/>
      <MyCarousel/>
      <BookingSteps/>
      <Testimonial/>
      <CallToAction/>
      <Partner/>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
