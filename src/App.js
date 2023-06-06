import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Component/Add';
import Home from './Component/Home';
import Moviedetail from './Component/Moviedetail';
import Bookingdetail from './Component/Bookingdetail';
import Bookticket from './Component/Bookticket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Moviedetail/>}/>
          <Route path='/booking/:id' element={<Bookingdetail/>}/>
          <Route path='/ticket/:id' element={<Bookticket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
