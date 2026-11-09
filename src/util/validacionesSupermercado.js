import { CATEGORIAS } from '../data/categorias.js'

export function normalizarArticulo(valores) {
  return {
    titulo: typeof valores.titulo === 'string' ? valores.titulo.trim() : '',
    bajada: typeof valores.bajada === 'string' ? valores.bajada.trim() : '',
    texto: typeof valores.texto === 'string' ? valores.texto.trim() : '',
    imagenUrl:
      typeof valores.imagenUrl === 'string' ? valores.imagenUrl.trim() : '',
    categoria:
      typeof valores.categoria === 'string' ? valores.categoria.trim() : '',
    stock: valores.stock,
    precio: valores.precio,
  }
}

function esUrlImagenValida(valor) {
  if (!valor) return false

  try {
    const url = new URL(valor)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export function validarArticulo(valores) {
  const datos = normalizarArticulo(valores)
  const errores = {}

  if (!datos.titulo) {
    errores.titulo = 'El título es obligatorio.'
  } else if (datos.titulo.length < 5 || datos.titulo.length > 100) {
    errores.titulo = 'El título debe tener entre 5 y 100 caracteres.'
  }

  if (!datos.bajada) {
    errores.bajada = 'La bajada es obligatoria.'
  } else if (datos.bajada.length < 15 || datos.bajada.length > 250) {
    errores.bajada = 'La bajada debe tener entre 15 y 250 caracteres.'
  }

  if (!datos.texto) {
    errores.texto = 'El texto es obligatorio.'
  } else if (datos.texto.length < 30 || datos.texto.length > 10000) {
    errores.texto = 'El texto debe tener entre 30 y 10000 caracteres.'
  }

  if (!datos.imagenUrl) {
    errores.imagenUrl = 'La URL de la imagen es obligatoria.'
  } else if (!esUrlImagenValida(datos.imagenUrl)) {
    errores.imagenUrl =
      'Ingresa una URL absoluta que comience con http:// o https://.'
  }

  if (!datos.categoria) {
    errores.categoria = 'La categoría es obligatoria.'
  } else if (!CATEGORIAS.includes(datos.categoria)) {
    errores.categoria = 'Selecciona una categoría válida.'
  }

  const precioCrudo = datos.precio

  if (precioCrudo === '' || precioCrudo === null || precioCrudo === undefined) {
    errores.precio = 'El precio es obligatorio.'
  } else {
    const precio = Number(precioCrudo)

    if (!Number.isFinite(precio)) {
      errores.precio = 'Ingresa un número válido para el precio.'
    } else if (!Number.isSafeInteger(precio)) {
      errores.precio = 'El precio debe ser un número entero (sin decimales).'
    } else if (precio < 0) {
      errores.precio = 'El precio no puede ser negativo.'
    } else if (precio == 0) {
      errores.precio = 'El precio no puede ser nulo.'
    } else {
      datos.precio = precio
    }
  }

  const stockCrudo = datos.stock

  if (stockCrudo === '' || stockCrudo === null || stockCrudo === undefined) {
    errores.stock = 'El stock inicial es obligatorio.'
  } else {
    const stock = Number(stockCrudo)

    if (!Number.isFinite(stock)) {
      errores.stock = 'Ingresa un número válido para el stock inicial.'
    } else if (!Number.isSafeInteger(stock)) {
      errores.stock = 'El stock debe ser un número entero (sin decimales).'
    } else if (stock < 0) {
      errores.stock = 'El stock no puede ser negativo.'
    } else {
      datos.stock = stock
    }
  }

  

  return {
    esValido: Object.keys(errores).length === 0,
    errores,
    datos,
  }
}
