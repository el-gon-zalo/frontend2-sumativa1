import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useSupermercado from '../hooks/useSupermercado.js'
import { validarArticulo } from '../util/validacionesSupermercado.js'
import { CATEGORIAS } from '../data/categorias.js'

const valoresIniciales = {
  titulo: '',
  bajada: '',
  texto: '',
  imagenUrl: '',
  categoria: '',
  stock: '',
  precio: '',
}

const ordenCampos = [
  'titulo',
  'bajada',
  'texto',
  'imagenUrl',
  'categoria',
  'stock',
  'precio',
]

function NuevoArticulo() {
  const [valores, setValores] = useState(valoresIniciales)
  const [errores, setErrores] = useState({})
  const { agregarArticulo } = useSupermercado()
  const navigate = useNavigate()

  const tituloRef = useRef(null)
  const bajadaRef = useRef(null)
  const textoRef = useRef(null)
  const imagenUrlRef = useRef(null)
  const categoriaRef = useRef(null)
  const stockRef = useRef(null)
  const precioRef = useRef(null)

  const referencias = {
    titulo: tituloRef,
    bajada: bajadaRef,
    texto: textoRef,
    imagenUrl: imagenUrlRef,
    categoria: categoriaRef,
    stock: stockRef,
    precio: precioRef,
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((previos) => ({ ...previos, [name]: value }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const { esValido, errores: nuevosErrores, datos } = validarArticulo(valores)

    if (!esValido) {
      setErrores(nuevosErrores)
      const primerInvalido = ordenCampos.find((campo) => nuevosErrores[campo])
      if (primerInvalido) {
        referencias[primerInvalido].current?.focus()
      }
      return
    }

    const resultado = agregarArticulo(datos)

    if (resultado.exito) {
      navigate('/')
    } else {
      setErrores(resultado.errores)
    }
  }

  const clasesCampo = (nombre) =>
    errores[nombre]
      ? 'w-full rounded-md border border-red-500 px-3 py-2 text-base focus:border-red-500 focus:outline-none'
      : 'w-full rounded-md border border-gray-300 px-3 py-2 text-base focus:border-(--color-primario) focus:outline-none'

  return (
    <section className="mx-auto w-full max-w-6xl px-3 py-12 justify-center text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold">Agregar artículo</h1>
        <p className="text-xl font-light text-gray-500 py-6">
          Completa el formulario para publicar un nuevo artículo en nuestro Supermercado.
        </p>
      </div>

      <form
        noValidate
        onSubmit={manejarEnvio}
        className="mx-auto max-w-3xl rounded-md bg-white p-4 shadow-sm"
      >
        {Object.keys(errores).length > 0 && (
          <div
            role="alert"
            className="mb-4 rounded-md border border-red-300 bg-red-50 p-4 text-red-700"
          >
            <p className="mb-1 font-semibold">Revisa los siguientes errores:</p>
            <ul className="list-disc pl-5 text-sm">
              {Object.values(errores).map((mensaje) => (
                <li key={mensaje}>{mensaje}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="titulo"
            className="mb-1 block font-semibold text-gray-800"
          >
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            value={valores.titulo}
            onChange={manejarCambio}
            ref={tituloRef}
            required
            aria-invalid={errores.titulo ? true : undefined}
            aria-describedby={errores.titulo ? 'titulo-error' : undefined}
            className={clasesCampo('titulo')}
          />
          {errores.titulo && (
            <p id="titulo-error" className="mt-1 text-sm text-red-600">
              {errores.titulo}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="bajada"
            className="mb-1 block font-semibold text-gray-800"
          >
            Bajada
          </label>
          <textarea
            id="bajada"
            name="bajada"
            rows={3}
            value={valores.bajada}
            onChange={manejarCambio}
            ref={bajadaRef}
            required
            aria-invalid={errores.bajada ? true : undefined}
            aria-describedby={errores.bajada ? 'bajada-error' : undefined}
            className={clasesCampo('bajada')}
          />
          {errores.bajada && (
            <p id="bajada-error" className="mt-1 text-sm text-red-600">
              {errores.bajada}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="texto"
            className="mb-1 block font-semibold text-gray-800"
          >
            Texto completo
          </label>
          <textarea
            id="texto"
            name="texto"
            rows={6}
            value={valores.texto}
            onChange={manejarCambio}
            ref={textoRef}
            required
            aria-invalid={errores.texto ? true : undefined}
            aria-describedby={errores.texto ? 'texto-error' : undefined}
            className={clasesCampo('texto')}
          />
          {errores.texto && (
            <p id="texto-error" className="mt-1 text-sm text-red-600">
              {errores.texto}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="imagenUrl"
            className="mb-1 block font-semibold text-gray-800"
          >
            URL de la imagen
          </label>
          <input
            id="imagenUrl"
            name="imagenUrl"
            type="url"
            value={valores.imagenUrl}
            onChange={manejarCambio}
            ref={imagenUrlRef}
            required
            aria-invalid={errores.imagenUrl ? true : undefined}
            aria-describedby={errores.imagenUrl ? 'imagenUrl-error' : undefined}
            className={clasesCampo('imagenUrl')}
          />
          {errores.imagenUrl && (
            <p id="imagenUrl-error" className="mt-1 text-sm text-red-600">
              {errores.imagenUrl}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="categoria"
            className="mb-1 block font-semibold text-gray-800"
          >
            Categoría
          </label>
          <select
            id="categoria"
            name="categoria"
            value={valores.categoria}
            onChange={manejarCambio}
            ref={categoriaRef}
            required
            aria-invalid={errores.categoria ? true : undefined}
            aria-describedby={errores.categoria ? 'categoria-error' : undefined}
            className={clasesCampo('categoria')}
          >
            <option value="">Selecciona una categoría</option>
            {CATEGORIAS.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {errores.categoria && (
            <p id="categoria-error" className="mt-1 text-sm text-red-600">
              {errores.categoria}
            </p>
          )}
        </div>


        <div className="mb-4">
          <label
            htmlFor="precio"
            className="mb-1 block font-semibold text-gray-800"
          >
            Precio
          </label>
          <input
            id="precio"
            name="precio"
            type="number"
            min="0"
            step="10"
            value={valores.precio}
            onChange={manejarCambio}
            ref={precioRef}
            required
            aria-invalid={errores.precio ? true : undefined}
            aria-describedby={errores.precio ? 'precio-error' : undefined}
            className={clasesCampo('precio')}
          />
          {errores.precio && (
            <p id="precio-error" className="mt-1 text-sm text-red-600">
              {errores.precio}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="stock"
            className="mb-1 block font-semibold text-gray-800"
          >
            Stock inicial
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={valores.stock}
            onChange={manejarCambio}
            ref={stockRef}
            required
            aria-invalid={errores.stock ? true : undefined}
            aria-describedby={errores.stock ? 'stock-error' : undefined}
            className={clasesCampo('stock')}
          />
          {errores.stock && (
            <p id="stock-error" className="mt-1 text-sm text-red-600">
              {errores.stock}
            </p>
          )}
        </div>

        


        <div className="flex flex-wrap gap-2 justify-center">
          <button
            type="submit"
            className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
          >
            Publicar artículo
          </button>
          <Link
            to="/"
            className="inline-block rounded-md border border-(--color-primario) px-3 py-1.5 text-base text-(--color-primario) transition-colors hover:bg-(--color-primario) hover:text-white"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </section>
  )
}

export default NuevoArticulo
