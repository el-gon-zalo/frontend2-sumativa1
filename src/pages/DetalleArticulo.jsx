import { useState } from 'react'
import { Link, useParams } from 'react-router'
import useSupermercado from '../hooks/useSupermercado.js'

function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, agregarAlCarrito } = useSupermercado()
  const [aviso, setAviso] = useState('')

  const articulo = articulos.find(
    (item) => String(item.id) === String(id),
  )

  if (!articulo) {
    return (
      <section className="mx-auto w-full max-w-6xl px-3 py-12">
        <div className="mx-auto max-w-xl rounded-md bg-white p-6 text-center shadow-sm">
          <h1 className="mb-2 text-3xl font-bold">Artículo no encontrado</h1>
          <p className="mb-4 text-gray-500">
            El artículo que buscas no existe o ya no está disponible.
          </p>
          <Link
            to="/"
            className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    )
  }

  const sinDisponibilidad = articulo.stock === 0

  const manejarAgregar = () => {
    agregarAlCarrito(articulo.id)
    setAviso('Artículo agregado al carrito.')
  }

  return (
    <section className="mx-auto w-full max-w-4xl px-3 py-12">

      <article className="overflow-hidden rounded-md bg-white shadow-sm">
        <img
          src={articulo.imagenUrl}
          alt={articulo.titulo}
          className="h-[400px] mx-auto w-80 sm:w-80 object-contain"
        />
        <div className="p-6">
          <span className="mb-3 inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-white">
            {articulo.categoria}
          </span>
          <h1 className="mb-2 text-4xl font-bold text-(--color-primario)">
            {articulo.titulo}
          </h1>
          <p className="mb-4 text-lg font-medium text-gray-800">
            {articulo.bajada}
          </p>

          <p className="text-xl font-bold text-(--color-primario-hover) py-2">Precio: ${articulo.precio}</p>

          <p className="mb-4 text-gray-500 py-2">
            {sinDisponibilidad
              ? 'Sin disponibilidad'
              : `Disponibles: ${articulo.stock}`}
          </p>
          <p className="mb-6 whitespace-pre-line break-words text-gray-700">
            {articulo.texto}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={manejarAgregar}
              disabled={sinDisponibilidad}
              className="rounded-md border border-(--color-primario) bg-(--color-primario) px-4 py-2 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover) disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-500"
            >
              Agregar al carrito
            </button>
            {sinDisponibilidad && (
              <p className="text-sm text-gray-500">
                Este artículo no tiene disponibilidad por el momento.
              </p>
            )}
          </div>

          <div aria-live="polite" role="status" className="mt-4 text-sm text-(--color-primario)">
            {aviso}
          </div>
        </div>
      </article>

      <div className="mb-6 flex flex-wrap gap-2 justify-center py-12">
        <Link
          to="/supermercado"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-6 py-3 text-base text-base text-white transition-colors hover:bg-(--color-primario-hover) hover:text-white text-xl"
        >
          Seguir comprando
        </Link>
        <Link
          to="/carrito"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-6 py-3 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover) text-xl"
        >
          Ir al carrito
        </Link>
      </div>

    </section>
  )
}

export default DetalleArticulo
