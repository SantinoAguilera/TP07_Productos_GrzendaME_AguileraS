import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout.js';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contacto.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/TP07_Productos_GrzendaME_AguileraS/' element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='/TP07_Productos_GrzendaME_AguileraS/contacto' element={<Contacto />}></Route>
            <Route path='/TP07_Productos_GrzendaME_AguileraS/productodetalle/:id' element={<ProductoDetalle />}></Route>
            <Route path='/TP07_Productos_GrzendaME_AguileraS/productos/:categoria' element={<Productos />}></Route>
            <Route path='/TP07_Productos_GrzendaME_AguileraS/quienessomos' element={<QuienesSomos />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
