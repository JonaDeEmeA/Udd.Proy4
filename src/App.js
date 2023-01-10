
import { Routes, Route } from 'react-router-dom';



import './App.css';
import {HomeView} from "./vistas/HomeView"
import {ReservaView} from "./vistas/ReservaView"
import {ListaReserva} from "./vistas/ListaReserva"




function App() {

 

  return  (
    
    <Routes>

      <Route path="/" element={<HomeView />} />      
      <Route path="/reserva" element={<ReservaView  />} />      
           
      <Route path="/lista-reserva" element={<ListaReserva  />} />      

    </Routes>
  )
  
}

export default App;
