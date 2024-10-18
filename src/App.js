import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Speakers from './pages/speakers/Speakers';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/speakers' element={<Speakers />} />
   </Routes>
   
   
   
   </BrowserRouter>
   </>
  );
}

export default App;



