// import { Switch,Route } from '@mui/material';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import ProjectCards from './Components/FlippingCard';
import Experience from './Components/Experience';

function App() {


  return (
   

      <main className="text-gray-400 bg-gray-900 body-font">
        <NavBar />
        {/* <BrowserRouter>
        <Banner />
        <ProjectCards />
        <Skills />
        <Experience />
        </BrowserRouter> */}
      </main>
   
  );
}

export default App;
