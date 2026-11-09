import { Link } from 'react-router'
import personasComprando from "../img/personas-comprando.jpg";

function QuienesSomos() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-3 py-12 text-center">
        <h1 className="text-5xl font-bold">Quiénes somos</h1>
        <p className="text-xl font-light text-gray-500 py-9">
          La Tiendita © nace en 2026 en el marco del curso de desarrollo Frontend, a manos del estudiante Gonzalo Riquelme.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-3 py-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-white p-4 shadow-sm border-3 border-round border-(--color-primario)">
            <h2 className="text-xl font-bold text-(--color-primario)">Nuestro propósito</h2>
            <p className="text-gray-500 py-4">
               Ayudamos a las personas a ahorrar dinero y vivir mejor.
            </p>
            <p className="text-gray-500 py-4">
              Buscamos generar un mundo más armonioso, donde se pueda vivir a gusto y disfrutar de todos los pequeños momentos.
            </p>
            <p className="text-gray-500 py-4">
               Contamos con una política estricta de cuidado medioambiental, por lo cual, todos nuestros productos disponen de un sello de trazabilidad, que asegura que una vez descartados, nuestra empresa se hará cargo de los residuos y sus efectos.
            </p>
          </div>
          
          <div className="rounded-md bg-white p-4 shadow-sm border-3 border-round border-(--color-primario)">
            <h2 className="text-xl font-bold text-(--color-primario)"></h2>
            
             <img
          src={personasComprando}
          alt="Logo La Tiendita"
          width="400"   
          height="400"
          className="mx-auto rounded-md"
          title="Logo"
          loading="lazy"
        />

          </div>
        </div>
      </section>


      <section className="mx-auto w-full max-w-6xl px-3 py-6">
        <Link
          to="/supermercado"
          className="inline-block rounded-md border border-(--color-primario) bg-(--color-primario) px-3 py-1.5 text-base text-white transition-colors hover:border-(--color-primario-hover) hover:bg-(--color-primario-hover)"
        >
          Ir a supermercado
        </Link>
      </section>
    </>
  )
}

export default QuienesSomos
