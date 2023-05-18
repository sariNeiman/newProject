import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Gallery from './Gallery';
import Button1 from './Button1';

function App() {
  // let r=useRoutes([
  //   {path:'*', element:<Button1/>},
  //   {path:'img', element:<Gallery/>}

  // ])
 return (
    <div className="App">
     <Routes>
        <Route path='*' element={<Button1/>}/>
       <Route path='img' element={<Gallery />} /> 
     </Routes>
    </div>
 );

}

export default App;
