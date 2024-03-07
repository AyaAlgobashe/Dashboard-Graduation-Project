import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from './Components/SideBare';
import Products from './Pages/products';
import { BrowserRouter } from 'react-router-dom';
import RouterPages from './Router/Router';

function App() {
  return (
    <>
    <BrowserRouter>
    <TemporaryDrawer/>
    <RouterPages/>
      
    </BrowserRouter>
   
    </>
   
  );
}

export default App;
