import './App.css';
import Information from './components/Info';
import Footer from './components/Footer';
import About from './components/About';
import Interests from './components/Interests';

function App() {
  return (
    <div className='container'>
      <Information />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
