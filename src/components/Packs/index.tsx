import passaport from '../../assets/passport.png'
import passaportVisa from '../../assets/passport-visa.png'
import consultancy from '../../assets/complete-consultancy.png'

function Packs() {
  return (
    <section className="w-full py-20 bg-[#ffffff]">
      <div className="w-[90%] mx-auto px-4 sm:px-8">
        <span className="inline-block bg-[#F6C010] text-black text-xl sm:text-2xl px-4 py-2 sm:py-3 rounded-full mb-4">
          Pacotes
        </span>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#0A0C25] mb-12 sm:mb-16">
          Confira nossos pacotes
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full mx-auto">
          <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:transform hover:-translate-y-2 transition-transform overflow-hidden border-2 border-solid border-gray-300">
            <div className="h-64 sm:h-80 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
              <img
                src={passaport}
                alt="Família no aeroporto"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-black px-5 py-1 rounded-full border-2 border-solid">Basic</h3>
              <span className="text-base sm:text-lg text-[#8D8D8D] bg-[#F5F5F5] px-5 py-1 rounded-full border-2 border-solid">Premium</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-black mb-6">Passaporte</h4>

            <div className="space-y-4 mb-8 pb-4 border-solid border-b border-[#E5E5E5]">
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#232323]">Atendimento</span>
                <span>Tempo</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#8D8D8D]">On-line</span>
                <span className="text-[#8D8D8D]">45 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
              <div>
                <p className="text-[#8D8D8D] text-sm sm:text-base">A partir de</p>
                <p className="text-4xl sm:text-5xl font-semibold text-[#232323]">R$ 890,00</p>
              </div>
              <button className="bg-[#1B2543] text-white font-bold py-4 sm:py-6 px-6 rounded-full text-lg sm:text-2xl">
                Contratar
              </button>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:transform hover:-translate-y-2 transition-transform overflow-hidden border-2 border-solid border-[#E5E5E5]">
            <div className="h-64 sm:h-80 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
              <img
                src={passaportVisa}
                alt="Família no aeroporto"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-black px-5 py-1 rounded-full border-2 border-solid">Basic</h3>
              <span className="text-base sm:text-lg text-[#8D8D8D] bg-[#F5F5F5] px-5 py-1 rounded-full border-2 border-solid">Premium</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-black mb-6">Passaporte + Visto</h4>

            <div className="space-y-4 mb-8 pb-4 border-solid border-b border-[#E5E5E5]">
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#232323]">Atendimento</span>
                <span>Tempo</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#8D8D8D]">On-line + Presencial</span>
                <span className="text-[#8D8D8D]">25 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
              <div>
                <p className="text-[#8D8D8D] text-sm sm:text-base">A partir de</p>
                <p className="text-4xl sm:text-5xl font-semibold text-[#232323]">R$ 1.290,00</p>
              </div>
              <button className="bg-[#1B2543] text-white font-bold py-4 sm:py-6 px-6 rounded-full text-lg sm:text-2xl">
                Contratar
              </button>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:transform hover:-translate-y-2 transition-transform overflow-hidden border-2 border-solid border-[#E5E5E5]">
            <div className="h-64 sm:h-80 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
              <img
                src={consultancy}
                alt="Família no aeroporto"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-black px-5 py-1 rounded-full border-2 border-solid">Basic</h3>
              <span className="text-base sm:text-lg text-[#8D8D8D] bg-[#F5F5F5] px-5 py-1 rounded-full border-2 border-solid">Premium</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-black mb-6">Consultoria Completa</h4>

            <div className="space-y-4 mb-8 pb-4 border-solid border-b border-[#E5E5E5]">
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#232323]">Atendimento</span>
                <span>Duração</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-[#8D8D8D]">Presencial Completo</span>
                <span className="text-[#8D8D8D]">10 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
              <div>
                <p className="text-[#8D8D8D] text-sm sm:text-base">A partir de</p>
                <p className="text-4xl sm:text-5xl font-semibold text-[#232323]">R$ 1.890,00</p>
              </div>
              <button className="bg-[#1B2543] text-white font-bold py-4 sm:py-6 px-6 rounded-full text-lg sm:text-2xl">
                Contratar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packs;
