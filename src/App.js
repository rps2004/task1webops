
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Project from './Project'
import Contact from './Contact'
import AboutMe from './About';
import Home from './Home'


function App() {
  return (
    <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/about" element={<AboutMe />} />
            
          </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
