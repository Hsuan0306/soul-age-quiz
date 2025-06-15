import Image from 'next/image';


export default function QuizIntro({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 py-12">
          <div className="mb-10">
            <Image
              src="/images/cover-main.png"
              alt="主視覺圖"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
          
          <div className="mb-12 max-w-md text-gray-700">
            <p className="text-sm leading-relaxed mb-4">
              雖然我們的身體活在 2025 年，<br /> 但你的靈魂，可能早就停留在某個特定的年代不肯離開──
            </p>
        
            <p className="text-sm leading-relaxed">
              是懷舊感性派的千禧老靈魂？<br /> 還是與演算法共存的 Gen Z 潮人新星？<br />
              一起來測看看，你的靈魂到底是幾歲！
            </p>
          </div>

          <button
            onClick={onStart}
            className="px-24 py-2 bg-[#CF1B21] text-[#E1E1E1] text-[14px] font-bold cursor-pointer hover:scale-105 transition-transform"
          >
            開始測驗！
          </button>
    </div>
  );
}
