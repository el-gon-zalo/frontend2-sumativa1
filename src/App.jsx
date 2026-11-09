import { Routes, Route } from 'react-router'
import SupermercadoProvider from './context/SupermercadoProvider.jsx'
import Navegacion from './components/Navegacion.jsx'
import PiePagina from './components/PiePagina.jsx'
import Inicio from './pages/Inicio.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Supermercado from './pages/Supermercado.jsx'
import NuevoArticulo from './pages/NuevoArticulo.jsx'
import DetalleArticulo from './pages/DetalleArticulo.jsx'
import Carrito from './pages/Carrito.jsx'
import './App.css'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <SupermercadoProvider>
      <div className="flex min-h-screen flex-col">
        <Navegacion />

        <Hero />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/supermercado" element={<Supermercado />} />
            <Route path="/supermercado/nuevo" element={<NuevoArticulo />} />
            <Route path="/supermercado/:id" element={<DetalleArticulo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
          </Routes>
        </main>

        

        <PiePagina />
      </div>
    </SupermercadoProvider>
  )
}

export default App
