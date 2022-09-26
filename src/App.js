import './App.css';
import { Appointment } from './pages/appointment-page/apointmentRegister';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<Appointment />} />
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
