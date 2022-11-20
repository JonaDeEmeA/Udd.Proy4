import { Routes, Route } from 'react-router-dom';
import { Typography, CssBaseline } from '@mui/material';

import './App.css';
import {HomeView} from "./vistas/HomeView"
import {ReservaView} from "./vistas/ReservaView"



// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import {LocalizationProvider  } from "@mui/x-date-pickers"
import { MuiNavbar } from './componentes/MuiNavbar';

// import { MuiButton } from './componentes/MuiBtn';
// import { MuiTipografia } from './componentes/MuiTipografia';
// import { MuiTextField } from "./componentes/MuiTextField";
// import {MuiSelect} from "./componentes/MuiSelect"
// import { MuiPicker } from "./componentes/MuiPicker";
// import { MuiDateRangePicker } from "./componentes/MuiDateRangePicker";



function App() {

  return  (
    
    <Routes>

      <Route path="/" element={<HomeView />} />      
      <Route path="/reserva" element={<ReservaView />} />      

    </Routes>
  )
  
}

export default App;
