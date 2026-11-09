import { Link } from 'react-router'
import ListadoArticulosSupermercado from '../components/ListadoArticulosSupermercado.jsx'
import logo from "../img/logo.jpg";


function Inicio() {
  return (
    <>

      <div className="flex flex-wrap gap-2 text-center justify-center py-9">
          <Link
            to="/supermercado"
            className="inline-block rounded-lg border border-(--color-primario) bg-(--color-primario) px-4 py-2 text-xl text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
          >
            Ir a supermercado
          </Link>
          <Link
            to="/quienes-somos"
            className="inline-block rounded-lg border border-(--color-primario) px-4 py-2 text-xl text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
          >
            ¿Quiénes somos?
          </Link>
      </div>
   
      {/*<section className="mx-auto w-full max-w-6xl px-3 py-12">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold">Comunidad Activa</h1>
            <p className="text-xl font-light text-gray-500">
              Un espacio ficticio para conocer oportunidades de colaboración y
              participación en la comunidad. Aquí puedes descubrir iniciativas
              cercanas, sumar tus ideas y encontrar formas concretas de
              involucrarte con las personas de tu entorno.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/areas-participacion"
                className="inline-block rounded-lg border border-(--color-primario) bg-(--color-primario) px-4 py-2 text-xl text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
              >
                Ver Supermercado
              </Link>
              <Link
                to="/quienes-somos"
                className="inline-block rounded-lg border border-(--color-primario) px-4 py-2 text-xl text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
              >
                ¿Quiénes somos?
              </Link>
            </div>
          </div>
          <div>
            <img
              src={logo}
              className="h-auto w-full rounded-lg shadow-sm"
              alt=""
            />
          </div>
        </div>
      </section>
      */}

      {/*
      <section id="supermercado" className="mx-auto w-full max-w-6xl px-3 py-12">
        <h2 className="text-2xl font-bold">Productos</h2>
        <div className="mt-6">
          <ListadoArticulosSupermercado />
        </div>
      </section>
      */}
    </>
  )
}

export default Inicio
