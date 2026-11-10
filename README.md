# SUMATIVA 1 - Supermercado (React)

Aplicación web que simula un supermercado en línea, desarrollada con React, JavaScript y Tailwind CSS.

## Características

- Catálogo de productos: 9 artículos presentados en tarjetas, cada una con imagen, categoría, precio y stock disponible.
- Filtro por categoría: permite acotar la búsqueda y ver solo los artículos de la categoría elegida.
- Carrito de compras: se pueden agregar y quitar unidades de cada artículo. Muestra la cantidad reservada por producto, el total de unidades y el monto final a pagar, que se actualiza automáticamente.
- Gestión de artículos: un desarrollador puede agregar nuevos artículos para que se vendan en el supermercado.
- Quiénes somos: sección con una presentación personal de los creadores del proyecto, de carácter ilustrativo.

## Tecnologías

- React
- React Router (navegación entre páginas)
- Tailwind CSS
- JavaScript

## Estructura general

- Carrito: lista los artículos reservados y calcula el total a pagar.
- useBlog: hook personalizado que centraliza el estado de artículos y carrito.
- Páginas: inicio, supermercado, carrito, agregar artículo y quiénes somos.

## Instalación y uso

1. Instalar dependencias:

   npm install

2. Ejecutar en modo desarrollo:

   npm run dev

Luego abre en el navegador la dirección que indique la terminal (normalmente http://localhost:5173).
