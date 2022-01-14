import './App.scss';
import { Routes, Route } from "react-router-dom"
import Default from './pages/default';
import Gamshig from './gamshig';
import Gamshigpage from './pages/gamshigpage';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/gamshig" >
                <Route path=":episode" element={<Gamshig />}/>
            </ Route>
            <Route path="/login" />
            <Route path="/sign" />
            <Route path="/gamshigpage" element={<Gamshigpage/> }/>
        </Routes>
    );
}
export default App;
