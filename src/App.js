import './App.css';
import {Routes, Route} from 'react-router-dom';
import Land from './components/land';
import LandGonza from './components/landGonza';
import DiaDetail from './components/diaDetail';
import User from './components/userpicker';
import DiaDetailGonza from './components/diaDetailGonza';
import { useEffect } from 'react';
import Plan from './components/plan';

function App() {
  useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll({
				lenisOptions: {
					duration: 1,
				},
			});
		})();
	}, []);
  return (
    <div
      data-scroll
      data-scroll-speed = "0.3">
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/home/pancho' element={<Land />} />
        <Route path='/home/gonza' element={<LandGonza/>}/>
        <Route path='/detail/:id' element={<DiaDetail />} />
        <Route path='/detail/gonza/:id' element={<DiaDetailGonza />} />
        <Route path='/plan' element={<Plan/>} />
      </Routes>
    </div>
    )
}

export default App

