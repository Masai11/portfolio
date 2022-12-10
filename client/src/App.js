
import './App.css';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Service from './components/Service'
import Achitectural from './components/Achitectural';
import Webdevs from './components/Webdevs';
import { BrowserRouter , Route, Routes } from 'react-router-dom';



function App() {
  return (

      <div>
        

        

        
        <Navbar/>
        {/* <Routes>
          <Route path='/' exact element ={<Landing/>}/>
        
          <Route path='/projects' exact element ={<Achitectural/>}/>
          <Route path='/contact' exact element ={<Footer/>}/>
          <Route path='/services' exact element={<Service/>}/>
        </Routes> */}
        <Landing/>
        <Service/>
        <Achitectural/>
        <Webdevs/>
        <Footer/>

        

      </div>

  );
}

export default App;
