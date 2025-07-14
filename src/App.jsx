import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import QuienesSomos from './pages/QuienesSomos'

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
