import ListadoArticulosSupermercado from '../components/ListadoArticulosSupermercado.jsx'

{/*
const areas = [
  {
    titulo: 'Medioambiente y cuidado del entorno',
    descripcion:
      'Organizamos jornadas de limpieza, reciclaje y cuidado de áreas verdes para mantener los espacios comunes en buen estado. Quienes participan aprenden prácticas sencillas para reducir residuos y proteger el entorno cercano, al tiempo que comparten tiempo al aire libre con vecinas y vecinos comprometidos.',
    imagen: 'https://picsum.photos/seed/comunidad-ambiente/640/420',
  },
  {
    titulo: 'Cultura y vida comunitaria',
    descripcion:
      'Impulsamos talleres, ferias y encuentros que celebran las expresiones artísticas y las tradiciones del barrio. El área invita a compartir música, literatura, artesanía y gastronomía en actividades abiertas, donde cada persona puede aportar su talento y disfrutar de un espacio de encuentro y recreación.',
    imagen: 'https://picsum.photos/seed/comunidad-cultura/640/420',
  },
  {
    titulo: 'Educación y acompañamiento',
    descripcion:
      'Fomentamos el intercambio de conocimientos mediante tutorías, clubes de lectura y espacios de estudio compartido. Voluntarias y voluntarios acompañan a estudiantes y a quienes desean aprender algo nuevo, fortaleciendo habilidades y creando redes de apoyo que favorecen el desarrollo de toda la comunidad.',
    imagen: 'https://picsum.photos/seed/comunidad-educacion/640/420',
  },
  {
    titulo: 'Bienestar y colaboración vecinal',
    descripcion:
      'Promovemos redes de apoyo entre vecinas y vecinos para acompañar a quienes atraviesan momentos difíciles, organizar campañas solidarias y cuidar la convivencia. El área busca fortalecer los vínculos cercanos y construir una comunidad más atenta, solidaria y dispuesta a ayudarse mutuamente.',
    imagen: 'https://picsum.photos/seed/comunidad-bienestar/640/420',
  },
]
  */}


function Supermercado() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-3 py-12">
        <div className="mb-6">
          <h1 className="text-5xl font-bold text-center">Supermercado</h1>
        </div>
      </section> 
        {/*
         [ <p className="text-xl font-light text-gray-500">
            Explora las distintas áreas en las que puedes colaborar y elige la
            que mejor se ajuste a tus intereses y disponibilidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              className="overflow-hidden rounded-md bg-white shadow-sm"
              key={area.titulo}
            >
              <img
                src={area.imagen}
                className="h-[220px] w-full rounded-t-md object-cover"
                alt=""
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-(--color-primario)">
                  {area.titulo}
                </h2>
                <p className="text-gray-500">{area.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      <section className="mx-auto w-full max-w-6xl px-3 py-12">
        <h2 className="text-2xl font-bold">Productos</h2>
       

        <div className="mt-6">
          <ListadoArticulosSupermercado />
        </div>
      </section>
    </>
  )
}

export default Supermercado
