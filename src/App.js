import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home";
import FarmFarm from './pages/FarmFarm';
import FarmFarm2 from './pages/FarmFarm2';
import Kekeke from './pages/Kekeke'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/farmfarm" element={<FarmFarm />}></Route>
        <Route path="/farmfarm2" element={<FarmFarm2 />}></Route>
        <Route path="/kekeke" element={<Kekeke />}></Route>
      </Routes>
    </div>
  );
}

export default App;
