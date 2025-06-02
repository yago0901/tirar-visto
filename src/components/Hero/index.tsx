import logo from '../../assets/logo.png';
import heroImage from '../../assets/img-right-hero.png';
import equipeHero from '../../assets/equipe-hero.png';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">
      
      <div className="w-full md:w-[44.5%] flex flex-col px-6 md:px-8 py-6">

        <header className="flex flex-col md:flex-row items-center justify-between md:h-28 gap-4 md:gap-8">
          <img src={logo} alt="Logo" className="w-36 h-auto object-contain" />
          <nav className="flex flex-wrap justify-center text-lg md:text-2xl font-medium text-black">
            <a href="/home" className="hover:underline p-2 md:p-4 font-bold">Home</a>
            <a href="/quem-somos" className="hover:underline p-2 md:p-4">Quem somos</a>
            <a href="/servicos" className="hover:underline p-2 md:p-4">Serviços</a>
            <a href="/contato" className="hover:underline p-2 md:p-4">Contato</a>
          </nav>
        </header>

        <main className="flex flex-col gap-6 h-auto md:h-[67%] mt-10">
          <div className="border-b border-solid border-[#E5E5E5] pb-4">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="w-full md:w-[65%] flex flex-col gap-6">
              <p className="text-[#8D8D8D] text-lg md:text-2xl">
                Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.
              </p>
              <button className="bg-[#0A0C25] text-white px-6 py-4 md:px-8 md:py-6 rounded-full font-medium flex items-center gap-2 w-fit">
                Saiba mais →
              </button>
            </div>

            <div className="w-full md:w-[45%] flex flex-col items-center gap-4">
              <img
                src={equipeHero}
                alt="Bruna"
                className="w-full object-cover rounded-xl"
              />
              <div className="w-full">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Conheça a Bruna</h1>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">Ver vídeo</p>
                  <div className="w-8 h-8 rounded-full bg-[#1B2543] flex items-center justify-center">
                    <span className="text-white text-xl">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="flex justify-between text-center mt-10 gap-6 md:pl-10">
          <div className='border-l-2 border-solid border-[#E5E5E5] p-4'>
            <p className="text-xl md:text-6xl font-semibold">509</p>
            <p className="text-gray-500 text-sm mt-2 md:text-2xl">Vistos Tirados</p>
          </div>
          <div className='border-l-2 border-solid border-[#E5E5E5] p-4'>
            <p className="text-xl md:text-6xl font-semibold">602</p>
            <p className="text-gray-500 text-sm mt-2 md:text-2xl">Passaportes Tirados</p>
          </div>
          <div className='border-l-2 border-solid border-[#E5E5E5] p-4'>
            <p className="text-xl md:text-6xl font-semibold">634</p>
            <p className="text-gray-500 text-sm mt-2 md:text-2xl">Famílias Felizes</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[55.5%] relative px-4 py-6">
        <img
          src={heroImage}
          alt="Cidade com roda gigante"
          className="w-full h-[300px] md:h-full object-cover rounded-[24px] md:rounded-[32px]"
        />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-[90%] md:max-w-[80%]">
          <h2 className="text-xl md:text-5xl font-bold mb-2">
            Realize o seu sonho com a ajuda da Tirar Visto!
          </h2>
          <p className="text-xs md:text-2xl">
            Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.
          </p>
        </div>

        <button className="absolute top-6 right-6 md:top-10 md:right-10 bg-yellow-400 text-[#0A0C25] px-4 py-2 md:px-5 md:py-2 rounded-full shadow-md">
          <h2 className="text-lg md:text-2xl font-semibold">Tirar meu visto agora!</h2>
        </button>
      </div>
    </section>

  );
}

export default Hero;