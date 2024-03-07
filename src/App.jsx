import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from './Components/SideBare';
import { BrowserRouter } from 'react-router-dom';
import RouterPages from './Router/Router';
import ProgressCircle from './Components/progress';
import ProggresData from './Components/MainProgres';

function App() {
  return (
    <>
    <BrowserRouter>
    <ProggresData/>
    <TemporaryDrawer/>
    <RouterPages/>
      
    </BrowserRouter>
   
    </>
   
  );
}

export default App;
