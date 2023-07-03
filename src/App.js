import './App.css';
import {Routes, Route} from 'react-router-dom';
import Land from './components/land';
import DiaDetail from './components/diaDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Land/>}/>
        <Route path='/detail/:id' element={<DiaDetail/>}/>
      </Routes>
    </div>
    )
}

export default App

