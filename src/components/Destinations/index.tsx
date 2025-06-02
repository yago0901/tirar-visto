import indonesia from '../../assets/indonesia.png'
import newYork from '../../assets/new-york.png'
import grecia from '../../assets/grecia.png'
import paris from '../../assets/paris.png'
import southAfrica from '../../assets/south-africa.png'
import india from '../../assets/india.png'
import bgImage from '../../assets/bg-destinations.png';

const destinations = [
  {
    title: "Bali, Indonésia",
    image: indonesia,
  },
  {
    title: "New York, Estados Unidos",
    image: newYork,
  },
  {
    title: "Santorini, Grécia",
    image: grecia,
  },
  {
    title: "Paris, França",
    image: paris,
  },
  {
    title: "Cidade do Cabo, África do Sul",
    image: southAfrica,
  },
  {
    title: "Mumbai, Índia",
    image: india,
  },
];

function Destinations() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="w-full mx-auto px-4" style={{
        backgroundImage: bgImage,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <span className="inline-block bg-[#F6C010] text-black text-2xl px-4 py-3 rounded-full mb-4">
          Top Destinos
        </span>
        <h2 className="text-3xl md:text-7xl mb-4 mt-4">Destinos mais procurados</h2>
        <p className="text-[#8D8D8D] mb-4 p-4 text-lg">
          Confira os destinos mais procurados por nossos clientes nos últimos meses,<br />
          qual será o seu novo destino?
        </p>
        <button className="bg-[#1B2543] text-white text-2xl px-6 py-5 rounded-full hover:bg-gray-800 ">
          Conheça mais
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {destinations.map((dest, index) => {
          const isMiddle = (index + 1) % 3 === 2;
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative rounded-[28px] overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 flex ${isOdd ? 'self-start' : 'self-end'
                } ${isMiddle ? 'h-80' : 'aspect-[4/3]'}`}
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 py-3 px-4 text-white text-2x1 rounded-full bg-white/10 backdrop-blur-md border border-white/30">
                {dest.title}
              </div>
            </div>
          );
        })}
      </div>


    </section>
  );
}

export default Destinations;