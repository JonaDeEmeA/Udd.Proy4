import { Routes, Route } from 'react-router-dom';



import './App.css';
import {HomeView} from "./vistas/HomeView"
import {ReservaView} from "./vistas/ReservaView"




function App() {

 

  return  (
    
    <Routes>

      <Route path="/" element={<HomeView />} />      
      <Route path="/reserva" element={<ReservaView  />} />      

    </Routes>
  )
  
}

export default App;
