import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Portofolio from './components/Portofolio';
import HomepageN from './components/HomepageN';
import ResumeN from './components/ResumeN';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/n' element={<HomepageN/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/resumen' element={<ResumeN/>}/>
        <Route path='/portofolio' element={<Portofolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
