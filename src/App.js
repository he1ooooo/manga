import './App.scss';
import { Routes, Route } from "react-router-dom"
import Default from './pages/default';
import Gamshig from './gamshig';
import Gamshigpage from './pages/gamshigpage';
import Header from './components/header';
function App() {
    return (
        <div className='bagsh'>
        <Header/>
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/gamshig" >
                <Route path=":episode" element={ <Gamshig />}/>
            </ Route>
            <Route path="/login" />
            <Route path="/sign" />
            <Route path="/gamshigpage" element={<Gamshigpage/> }/>
        </Routes></div>
    );
}
export default App;
