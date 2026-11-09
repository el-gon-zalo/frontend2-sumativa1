import { useState } from 'react'
import { Link } from 'react-router'
import useSupermercado from '../hooks/useSupermercado.js'
import bolsa from "../img/bolsa.jpg";

function Carrito() {
  const { articulos, carrito, agregarAlCarrito, disminuirCantidadCarrito } =
    useSupermercado()
  const [aviso, setAviso] = useState('')

  const totalUnidades = carrito.reduce(
    (suma, entrada) => suma + entrada.cantidad,
    0,
  )

  const articuloDe = (articuloId) =>
    articulos.find((articulo) => articulo.id === articuloId)

  const manejarAumentar = (entrada) => {
    const articulo = articuloDe(entrada.articuloId)
    agregarAlCarrito(entrada.articuloId)
    setAviso(`Aviso: Se aumentó la cantidad de «${articulo?.titulo}».`)
  }

  const manejarDisminuir = (entrada) => {
    const articulo = articuloDe(entrada.articuloId)
    disminuirCantidadCarrito(entrada.articuloId)
    if (entrada.cantidad === 1) {
      setAviso(`«${articulo?.titulo}» fue retirado del carrito.`)
    } else {
      setAviso(`Aviso: Se disminuyó la cantidad de «${articulo?.titulo}».`)
    }
  }

  const totalAPagar = carrito.reduce((suma, entrada) => {
  const articulo = articuloDe(entrada.articuloId)
  return suma + (articulo ? articulo.precio * entrada.cantidad : 0)
}, 0)

  return (
    <section className="mx-auto w-full max-w-4xl px-3 py-12 justify-center text-center">
      <h1 className="mb-6 text-5xl font-bold">Carrito</h1>

      <p aria-live="polite" role="status" className="mb-4 text-(--color-primario)">
        {aviso}
      </p>

      {carrito.length === 0 ? (
        <div className="rounded-md bg-white p-6 text-center shadow-sm">
          <p className="mb-4 text-gray-500">
            Tu carrito está vacío. Explora el supermercado y reserva los artículos que
            te interesen.
          </p>
          <Link
            to="/supermercado"
            className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
          >
            Ir a supermercado
          </Link>
        </div>
      ) : (
        <>

          <ul className="flex flex-col gap-4">
            {carrito.map((entrada) => {
              const articulo = articuloDe(entrada.articuloId)

              if (!articulo) {
                return null
              }

              return (
                <li
                  key={entrada.articuloId}
                  className="overflow-hidden rounded-md bg-white shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row">
                    <img
                      src={articulo.imagenUrl}
                      alt={articulo.titulo}
                      className="h-[180px] w-full object-cover sm:h-auto sm:w-48"
                    />
                    <div className="flex grow flex-col gap-2 p-4">
                      <span className="inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-white">
                        {articulo.categoria}
                      </span>
                      <h2 className="text-2xl font-bold text-(--color-primario)">
                        {articulo.titulo}
                      </h2>

                      <p className="text-xl font-bold text-(--color-primario-hover) py-2">Precio: ${articulo.precio}</p>

                      <p className="text-sm text-gray-500">
                        Cantidad en el carrito: {entrada.cantidad}
                      </p>
                      <p className="text-sm text-gray-500">
                        Disponibles: {articulo.stock}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => manejarAumentar(entrada)}
                          disabled={articulo.stock === 0}
                          aria-label={`Aumentar cantidad de ${articulo.titulo}`}
                          className="rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover) disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => manejarDisminuir(entrada)}
                          aria-label={`Disminuir cantidad de ${articulo.titulo}`}
                          className="rounded-md border border-(--color-primario) px-3 py-1.5 text-base text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <ul className="flex flex-col gap-4">
            {/* ...tus tarjetas de artículos... */}
          </ul>

          <div className="mt-4 overflow-hidden rounded-md bg-white p-6">
            <img
              src={bolsa}
              alt="bolsa"
              className="mx-auto w-40 sm:w-40 object-contain"
            />

            <h2 className="mb-2 text-2xl font-bold text-(--color-primario) py-4">
              Total a pagar:
            </h2>
            <p className="text-3xl font-bold text-(--color-primario-hover)">
              ${totalAPagar.toLocaleString('es-CL')}
            </p>
            <p className="text-l py-6">
              Total de productos en el carrito: {totalUnidades}
            </p>
          </div>


        </>



      )}

    </section>
  )
}

export default Carrito
