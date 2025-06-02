import family from '../../assets/family.png';

function Destinations() {
  return (
    <section className="bg-white px-6 md:px-16 py-8 min-h-screen">
      <div className="flex flex-col justify-between items-start mb-8 mt-8 gap-6">
        <button className="bg-[#F6C010] text-[#0A0C25] px-4 py-3 rounded-full shadow-md self-start">
          <h2 className="text-xl md:text-2xl">Veja como funciona</h2>
        </button>

        <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4 md:gap-0 md:justify-between">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[130.8%] md:w-[35%]">
            Sua tranquilidade<br className="hidden md:block" />
            não tem preço!
          </h1>
          <p className="text-gray-500 text-base md:text-2xl leading-relaxed md:leading-[130.8%] md:w-[60%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, quando um desconhecido embaralhou tudo.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 w-full">
        <div className="w-full md:w-[58%]">
          <img
            src={family}
            alt="Família no aeroporto"
            className="w-full h-auto md:h-full object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-[42%] mt-6 md:mt-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold">Etapa Inicial</h2>
            <p className="text-gray-500 text-sm md:text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold">Processo de Entrevista</h2>
            <p className="text-gray-500 text-sm md:text-md">+ Leia mais</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold">Entrega de Documentos</h2>
            <p className="text-gray-500 text-sm md:text-md">+ Leia mais</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
