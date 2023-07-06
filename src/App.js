import './App.css';
import {Routes, Route} from 'react-router-dom';
import Land from './components/land';
import LandGonza from './components/landGonza';
import DiaDetail from './components/diaDetail';
import User from './components/userpicker';
import DiaDetailGonza from './components/diaDetailGonza';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/home/pancho' element={<Land />} />
        <Route path='/home/gonza' element={<LandGonza/>}/>
        <Route path='/detail/:id' element={<DiaDetail />} />
        <Route path='/detail/gonza/:id' element={<DiaDetailGonza/>}/>
      </Routes>
    </div>
    )
}

export default App

