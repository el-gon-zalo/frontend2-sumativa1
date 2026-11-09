import { useContext } from 'react'
import SupermercadoContext from '../context/SupermercadoContext.js'

function useSupermercado() {
  const contexto = useContext(SupermercadoContext)

  if (!contexto) {
    throw new Error('useSupermercado debe utilizarse dentro de un SupermercadoProvider.')
  }

  return contexto
}

export default useSupermercado
