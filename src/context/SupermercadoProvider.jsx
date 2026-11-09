import { useReducer } from 'react'
import SupermercadoContext from './SupermercadoContext.js'
import articulosIniciales from '../data/articulos.json'
import { validarArticulo } from '../util/validacionesSupermercado.js'
import {
  crearEstadoInicial,
  reducer,
  TIPOS_ACCION,
} from './supermercadoReducer.js'

function SupermercadoProvider({ children }) {
  const [estado, dispatch] = useReducer(
    reducer,
    articulosIniciales,
    crearEstadoInicial,
  )

  const agregarArticulo = (valores) => {
    const { esValido, errores, datos } = validarArticulo(valores)

    if (!esValido) {
      return { exito: false, errores }
    }

    const nuevoArticulo = {
      id: crypto.randomUUID(),
      ...datos,
    }

    dispatch({ type: TIPOS_ACCION.AGREGAR_ARTICULO, articulo: nuevoArticulo })

    return { exito: true }
  }

  const agregarAlCarrito = (articuloId) => {
    dispatch({ type: TIPOS_ACCION.AGREGAR_AL_CARRITO, articuloId })
  }

  const disminuirCantidadCarrito = (articuloId) => {
    dispatch({ type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO, articuloId })
  }

  const valor = {
    articulos: estado.articulos,
    carrito: estado.carrito,
    agregarArticulo,
    agregarAlCarrito,
    disminuirCantidadCarrito,
  }

  return <SupermercadoContext.Provider value={valor}>{children}</SupermercadoContext.Provider>
}

export default SupermercadoProvider
