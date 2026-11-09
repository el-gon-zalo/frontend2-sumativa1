import { Link, NavLink } from 'react-router'
import logo from "../img/logo.jpg";

function Navegacion() {
  return (
    <header className="border-b barracustom shadow-sm py-6 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 md:flex-row md:items-center text-white">
        <Link
          to="/"
          className="py-1 text-xl font-bold text-white"
        >
         
         <img
          src={logo}
          alt="Logo La Tiendita"
          width="50"   
          height="50"
          className="mx-auto rounded-md"
          title="Logo"
          loading="lazy"
        />

        </Link>

        <nav aria-label="Menú principal">
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-md bg-(--color-primario-hover) px-4 py-2 font-semibold'
                    : 'rounded-md px-4 py-2 font-medium hover:bg-(--color-primario-hover)'
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/supermercado"
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-md bg-(--color-primario-hover) px-4 py-2 font-semibold'
                    : 'rounded-md px-4 py-2 font-medium hover:bg-(--color-primario-hover)'
                }
              >
                Supermercado
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/supermercado/nuevo"
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-md bg-(--color-primario-hover) px-4 py-2 font-semibold'
                    : 'rounded-md px-4 py-2 font-medium hover:bg-(--color-primario-hover)'
                }
              >
                Agregar artículo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/carrito"
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-md bg-(--color-primario-hover) px-4 py-2 font-semibold'
                    : 'rounded-md px-4 py-2 font-medium hover:bg-(--color-primario-hover)'
                }
              >
                Carrito
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quienes-somos"
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-md bg-(--color-primario-hover) px-4 py-2 font-semibold'
                    : 'rounded-md px-4 py-2 font-medium hover:bg-(--color-primario-hover)'
                }
              >
                Quiénes somos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navegacion
