import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import NoutFoundPage from './pages/NoutFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const nav = useNavigate()
  
  


  return (
    <div>
        <div>
          <ButtonGroup aria-label="Basic example">
            <Button variant="warning" onClick={()=>{nav('/')}}>Main</Button>
            <Button variant="outline-warning" onClick={()=>{nav('/about')}}>About</Button>
          </ButtonGroup>
        </div>
        
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>

          <Route path='*' element={<NoutFoundPage />}></Route>

        </Routes>
    </div>
  );
}

export default App;
