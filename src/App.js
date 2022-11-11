import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='website-container'>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
