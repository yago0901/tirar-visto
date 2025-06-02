function Doubts() {
  return (
    <section className="w-full bg-white text-black py-16 px-8">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="space-y-6 md:w-[80%]">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">Está com alguma dúvida?</h2>
          <p className="text-lg md:text-xl text-[#8D8D8D]">
            Entre em contato através do nosso canal direto ao cliente através do botão abaixo
          </p>
          <button className="bg-[#1B2543] text-white text-lg md:text-xl font-bold px-8 py-4 md:py-6 rounded-full">
            Central de Atendimento
          </button>
        </div>

        <div className="flex justify-center items-center">
          <h2 className="text-4xl md:text-5xl border-b pb-4 flex items-center gap-4">
            Receba novidades
            <span
              className="w-8 h-8 text-black flex items-center justify-center transform -rotate-45"
            >
              →
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-[90%] mx-auto pt-16">

        <div className="mb-12 lg:mb-0">
          <h3 className="text-2xl mb-4 text-[#232323]">Siga em nossas redes:</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Instagram", "X", "Facebook", "Youtube"].map((network) => (
              <span
                key={network}
                className="text-[#232323] px-6 py-4 rounded-full border-solid border-2 border-[#232323] font-semibold"
              >
                {network}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16">
          <div>
            <h4 className="text-xl font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2">
              {["Home", "Quem somos", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg text-[#8D8D8D] hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Novidades</h4>
            <ul className="space-y-2">
              {["Passaporte", "Visto", "Entrevista", "Polícia Federal"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg text-[#8D8D8D] hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Suporte</h4>
            <ul className="space-y-2">
              {["FAQ", "Contato", "Dúvidas", "Frequentes"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-lg text-[#8D8D8D] hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doubts;
