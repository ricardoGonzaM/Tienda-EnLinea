import {Link, Route, Routes} from "react-router-dom"
import Productos from './components/Productos';
import Login from './components/Login';
import Register from './components/Register';
import Agregar from './components/Agregar';
import Lista from './components/Lista';
import Detalle from './components/Detalle';
import Edit from './components/EditProduct';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registro" element={<Register />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/agregar" element={<Agregar />}/>
        <Route path="/lista" element={<Lista />}/>
        <Route path="/detalle/:id" element={<Detalle />}/>
        <Route path="/edit/:id" element={<Edit />}/>
    </Routes>
  );
}

export default App
