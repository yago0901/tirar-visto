import clock from '../../assets/clock.png'
import telephone from '../../assets/telephone.png'

function How() {
  return (
    <div className="flex flex-col justify-center bg-[#F7F7F7] text-gray-900 p-6 md:p-12 h-[45vh] w-full">
      <div className="flex items-center justify-around h-[50%] w-full text-2xl md:text-6xl font-semibold">
        <div>
          <h1>CONSULTORIA COMPLETA PARA</h1>
          <h1>TIRAR SEU VISTO</h1>
        </div>
        <div className="ml-8">
          <img src={telephone} alt="Telefone" className="w-[152px] h-auto object-contain" />
        </div>
      </div>

      <div className="flex items-center justify-around h-[50%] w-full text-2xl md:text-6xl font-semibold">
        <div className="p-2">
          <img src={clock} alt="Relógio" className="w-[152px] h-auto object-contain" />
        </div>
        <div>
          <h1>VOCÊ ESTÁ EM BOAS MÃOS!</h1>
        </div>
      </div>
    </div>
  );
}

export default How;