import './App.css';
import { Route,Routes, Link } from 'react-router-dom';
import NumOrWord from './components/NumOrWord';
import Custom from './components/Custom';

function App() {


  return (
    <div className="App">
      <h2>Welcome</h2>

      <Routes>
        <Route path='/:input' element={<NumOrWord/>}></Route>
        {/* <Route path='/:word' element={<Word/>}></Route> */}
        <Route path='/:input/:color/:bgColor' element={<Custom/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
