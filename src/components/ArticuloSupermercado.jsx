import { Link } from 'react-router'

function ArticuloSupermercado({ articulo }) {
  const disponibilidad =
    articulo.stock > 0
      ? `Disponibles: ${articulo.stock}`
      : 'Sin disponibilidad'

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-sm">
      <img
        src={articulo.imagenUrl}
        alt={articulo.titulo}
        loading="lazy"
        className="h-[400px] w-full rounded-t-md object-contain "
      />
      <div className="flex grow flex-col p-4">
        <span className="mb-2 inline-flex w-fit rounded-full bg-(--color-primario-suave) px-3 py-1 text-xs font-semibold text-white">
          {articulo.categoria}
        </span>
        <h3 className="text-2xl font-bold text-(--color-primario)">
          {articulo.titulo}
        </h3>
        <p className="text-sm font-medium text-gray-800 py-2">{articulo.bajada}</p>

        <p className="text-xl font-bold text-(--color-primario-hover) py-2">Precio: ${articulo.precio}</p>

        <p className="mt-2 text-sm text-gray-500">{disponibilidad}</p>
        <div className="mt-auto pt-4">
          <Link
            to={`/supermercado/${articulo.id}`}
            className="inline-block rounded-md border border-(--color-primario) px-3 py-1.5 text-sm text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
          >
            Ver artículo
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ArticuloSupermercado
