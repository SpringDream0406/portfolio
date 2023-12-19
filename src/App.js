import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home";
import FarmFarm from './pages/FarmFarm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/farmfarm" element={<FarmFarm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
