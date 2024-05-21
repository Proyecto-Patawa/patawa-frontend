import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/LoginPage.jsx";
import OwnersTable from "./Components/OwnersTable.jsx";



const owners = [
  {
    id: 1,
    tipodedocumento: "CC",
    identificacion: "1117800000",
    nombre: "Andrés López Ortega",
    email: "andres@gmail.com",
    direccion: "Barrio San Luis",
    telefono: "3209000000",
  },

  {
    id: 1,
    tipodedocumento: "CC",
    identificacion: "1117800000",
    nombre: "Andrés López Ortega",
    email: "andres@gmail.com",
    direccion: "Barrio San Luis",
    telefono: "3209000000",
  },

  {
    id: 1,
    tipodedocumento: "CC",
    identificacion: "1117800000",
    nombre: "Andrés López Ortega",
    email: "andres@gmail.com",
    direccion: "Barrio San Luis",
    telefono: "3209000000",
  },

  {
    id: 1,
    tipodedocumento: "CC",
    identificacion: "1117800000",
    nombre: "Andrés López Ortega",
    email: "andres@gmail.com",
    direccion: "Barrio San Luis",
    telefono: "3209000000",
  },

  {
    id: 1,
    tipodedocumento: "CC",
    identificacion: "1117800000",
    nombre: "Andrés López Ortega",
    email: "andres@gmail.com",
    direccion: "Barrio San Luis",
    telefono: "3209000000",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/owners" element={<OwnersTable owners={owners} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

  
