import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <Services/>
      <br />
      <Footer />
    </div>
  );
}

export default App;
