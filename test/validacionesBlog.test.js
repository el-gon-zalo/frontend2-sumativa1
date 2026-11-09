import test from 'node:test'
import assert from 'node:assert/strict'
import { validarArticulo } from '../src/util/validacionesSupermercado.js'

function articuloBase(sobreescritura = {}) {
  return {
    titulo: 'Título de ejemplo para el supermercado',
    bajada: 'Una bajada suficientemente larga para pasar la validación.',
    texto:
      'Este es un texto completo con más de treinta caracteres para cumplir la regla de longitud mínima.',
    imagenUrl: 'https://picsum.photos/seed/test/800/500',
    categoria: 'Cultura',
    stock: '5',
    ...sobreescritura,
  }
}

test('un artículo válido es aceptado y el stock se convierte a número', () => {
  const resultado = validarArticulo(articuloBase())

  assert.equal(resultado.esValido, true)
  assert.equal(typeof resultado.datos.stock, 'number')
  assert.equal(resultado.datos.stock, 5)
})

test('el stock cero se acepta como stock válido', () => {
  const resultado = validarArticulo(articuloBase({ stock: '0' }))

  assert.equal(resultado.esValido, true)
  assert.equal(resultado.datos.stock, 0)
})

test('un stock vacío no se convierte silenciosamente en cero', () => {
  const resultado = validarArticulo(articuloBase({ stock: '' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.stock)
})

test('se rechaza un stock negativo', () => {
  const resultado = validarArticulo(articuloBase({ stock: '-3' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.stock)
})

test('se rechaza un stock con decimales', () => {
  const resultado = validarArticulo(articuloBase({ stock: '2.5' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.stock)
})

test('se rechaza un stock no numérico', () => {
  const resultado = validarArticulo(articuloBase({ stock: 'abc' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.stock)
})

test('se rechaza una categoría desconocida', () => {
  const resultado = validarArticulo(articuloBase({ categoria: 'Deportes' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.categoria)
})

test('se rechaza una categoría vacía', () => {
  const resultado = validarArticulo(articuloBase({ categoria: '' }))

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.categoria)
})

test('cada categoría del catálogo se acepta', () => {
  for (const categoria of ['Medioambiente', 'Cultura', 'Educación', 'Comunidad']) {
    const resultado = validarArticulo(articuloBase({ categoria }))

    assert.equal(resultado.esValido, true, `categoría ${categoria}`)
  }
})

test('se conservan las validaciones de título, bajada, texto e imagen', () => {
  const resultado = validarArticulo(
    articuloBase({
      titulo: 'c',
      bajada: '',
      texto: 'corto',
      imagenUrl: 'no-es-url',
    }),
  )

  assert.equal(resultado.esValido, false)
  assert.ok(resultado.errores.titulo)
  assert.ok(resultado.errores.bajada)
  assert.ok(resultado.errores.texto)
  assert.ok(resultado.errores.imagenUrl)
})
