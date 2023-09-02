import './App.css';
import Create from './Component/Create';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Read from './Component/Read';



function App() {
  return (
    <BrowserRouter>
    <Routes>
   
    <Route exact path='/' element={<Create/>}></Route>
    <Route exact path='/read' element={<Read/>}></Route>
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
