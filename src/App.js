import './App.css';
import About from './components/About';
import Education from './components/Education';
import Home from './components/Home';
import Skill from './components/Skill';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/myskills' element={<Skill/>}/>
            <Route path='/myEducation' element={<Education/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
