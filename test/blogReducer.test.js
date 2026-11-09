import test from 'node:test'
import assert from 'node:assert/strict'
import {
  crearEstadoInicial,
  reducer,
  TIPOS_ACCION,
} from '../src/context/supermercadoReducer.js'

function fixture() {
  return crearEstadoInicial([
    { id: 'a', titulo: 'Artículo A', stock: 2, categoria: 'Cultura' },
    { id: 'b', titulo: 'Artículo B', stock: 0, categoria: 'Comunidad' },
  ])
}

test('el estado inicial deja el carrito vacío y conserva el stock', () => {
  const estado = fixture()

  assert.equal(estado.carrito.length, 0)
  assert.equal(estado.articulos.length, 2)
  assert.equal(estado.articulos[0].stock, 2)
})

test('escenario numérico obligatorio de conservación de unidades', () => {
  let estado = fixture()

  estado = reducer(estado, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'a',
  })
  assert.equal(estado.articulos.find((a) => a.id === 'a').stock, 1)
  assert.equal(estado.carrito.find((e) => e.articuloId === 'a').cantidad, 1)

  estado = reducer(estado, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'a',
  })
  assert.equal(estado.articulos.find((a) => a.id === 'a').stock, 0)
  assert.equal(estado.carrito.find((e) => e.articuloId === 'a').cantidad, 2)

  estado = reducer(estado, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'a',
  })
  assert.equal(estado.articulos.find((a) => a.id === 'a').stock, 0)
  assert.equal(estado.carrito.find((e) => e.articuloId === 'a').cantidad, 2)

  estado = reducer(estado, {
    type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO,
    articuloId: 'a',
  })
  assert.equal(estado.articulos.find((a) => a.id === 'a').stock, 1)
  assert.equal(estado.carrito.find((e) => e.articuloId === 'a').cantidad, 1)

  estado = reducer(estado, {
    type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO,
    articuloId: 'a',
  })
  assert.equal(estado.articulos.find((a) => a.id === 'a').stock, 2)
  assert.equal(
    estado.carrito.find((e) => e.articuloId === 'a'),
    undefined,
  )
})

test('agregar sin stock disponible mantiene el estado sin cambios', () => {
  const inicial = fixture()
  const resultado = reducer(inicial, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'b',
  })

  assert.equal(resultado, inicial)
})

test('operar con un id inexistente mantiene el estado sin cambios', () => {
  const inicial = fixture()
  const resultado = reducer(inicial, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'no-existe',
  })

  assert.equal(resultado, inicial)
})

test('disminuir un artículo que no está en el carrito no cambia el estado', () => {
  const inicial = fixture()
  const resultado = reducer(inicial, {
    type: TIPOS_ACCION.DISMINUIR_CANTIDAD_CARRITO,
    articuloId: 'a',
  })

  assert.equal(resultado, inicial)
})

test('el reducer no muta el estado anterior (inmutabilidad)', () => {
  const inicial = fixture()
  const congelado = JSON.parse(JSON.stringify(inicial))

  reducer(inicial, {
    type: TIPOS_ACCION.AGREGAR_AL_CARRITO,
    articuloId: 'a',
  })

  assert.deepEqual(inicial, congelado)
  assert.equal(inicial.articulos.find((a) => a.id === 'a').stock, 2)
  assert.equal(inicial.carrito.length, 0)
})

test('agregar un artículo nuevo lo incorpora al inventario', () => {
  const inicial = fixture()
  const nuevo = {
    id: 'c',
    titulo: 'Artículo C',
    stock: 4,
    categoria: 'Educación',
  }
  const resultado = reducer(inicial, {
    type: TIPOS_ACCION.AGREGAR_ARTICULO,
    articulo: nuevo,
  })

  assert.equal(resultado.articulos.length, 3)
  assert.equal(resultado.articulos.find((a) => a.id === 'c').stock, 4)
})
