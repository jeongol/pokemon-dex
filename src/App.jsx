import './App.css'
import Dex from './pages/Dex';
import Home from './pages/Home';
import Testpages from './pages/Testpages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />}/>
        <Route path="/" element={<Testpages />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;