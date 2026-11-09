import { useId, useState } from 'react'
import ArticuloSupermercado from './ArticuloSupermercado.jsx'
import useSupermercado from '../hooks/useSupermercado.js'
import { CATEGORIAS } from '../data/categorias.js'
import {
  VALOR_TODAS,
  filtrarArticulosPorCategoria,
} from '../util/filtroSupermercado.js'

function ListadoArticulosSupermercado() {
  const { articulos } = useSupermercado()
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(VALOR_TODAS)
  const idFiltro = useId()

  const articulosVisibles = filtrarArticulosPorCategoria(
    articulos,
    categoriaSeleccionada,
  )

  const manejarCambioFiltro = (evento) => {
    setCategoriaSeleccionada(evento.target.value)
  }

  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor={idFiltro}
          className="mb-1 block font-semibold text-gray-800"
        >
          Filtrar por categoría
        </label>
        <select
          id={idFiltro}
          value={categoriaSeleccionada}
          onChange={manejarCambioFiltro}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none sm:w-auto"
        >
          <option value={VALOR_TODAS}>Todas</option>
          {CATEGORIAS.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {articulos.length === 0 ? (
        <p className="text-gray-500">
          Aún no hay artículos publicados. Sé la primera persona en compartir
          una historia.
        </p>
      ) : articulosVisibles.length === 0 ? (
        <p className="text-gray-500">
          No hay artículos en la categoría seleccionada.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articulosVisibles.map((articulo) => (
            <ArticuloSupermercado key={articulo.id} articulo={articulo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListadoArticulosSupermercado
