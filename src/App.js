import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from "./pages/Home";
import TravelMate from './components/TravelMate';
import Senimo from './components/Senimo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/tm" element={<TravelMate />}></Route>
        <Route path="/senimo" element={<Senimo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
