import test from 'node:test'
import assert from 'node:assert/strict'
import {
  VALOR_TODAS,
  filtrarArticulosPorCategoria,
} from '../src/util/filtroSupermercado.js'

const articulos = [
  { id: '1', categoria: 'Medioambiente' },
  { id: '2', categoria: 'Cultura' },
  { id: '3', categoria: 'Educación' },
  { id: '4', categoria: 'Comunidad' },
  { id: '5', categoria: 'Comunidad' },
]

test('"Todas" devuelve la colección completa', () => {
  const resultado = filtrarArticulosPorCategoria(articulos, VALOR_TODAS)

  assert.equal(resultado.length, 5)
})

test('una categoría devuelve únicamente sus artículos', () => {
  const resultado = filtrarArticulosPorCategoria(articulos, 'Comunidad')

  assert.equal(resultado.length, 2)
  assert.ok(resultado.every((a) => a.categoria === 'Comunidad'))
})

test('una categoría sin artículos devuelve un arreglo vacío', () => {
  const resultado = filtrarArticulosPorCategoria(articulos, 'Deportes')

  assert.equal(resultado.length, 0)
})

test('el filtro no altera el inventario original', () => {
  const copia = JSON.parse(JSON.stringify(articulos))

  filtrarArticulosPorCategoria(articulos, 'Cultura')

  assert.deepEqual(articulos, copia)
})
