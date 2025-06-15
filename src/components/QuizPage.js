import Image from 'next/image';

export default function QuizPage({ data, onSelect, current, total }) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4">
      <div className="relative w-full max-w-[440px] aspect-[1350/970] mb-6 mt-2">
        
        {/* 影片區：精準對位 */}
        <div
          className="absolute overflow-hidden rounded-md"
          style={{
            left: "8.5%",
            top: "13%",
            width: "63.7%",
            height: "67%",
          }}
        >
          <video
            src={data.videoUrl}
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* 中空電視前景圖 */}
        <Image
          src="/images/tv-frame.png"
          alt="TV Frame"
          fill
          className="pointer-events-none"
        />
      </div>


      {/* ❓ 題目文字 + boom icon */}
      <div className="flex items-center justify-center gap-2 text-red-600 font-extrabold text-[14px] sm:text-[18px] -mt-3 mb-6 flex-wrap">
        <Image src="/images/boom.png" alt="boom" width={20} height={20} />
        <span dangerouslySetInnerHTML={{ __html: data.question }} />
        <Image src="/images/boom.png" alt="boom" width={20} height={20} />
      </div>

      {/* 🔴 選項按鈕區塊 */}
      <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm mb-6">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(opt.score)}
            className="w-full bg-[#CF1B21] text-[#E1E1E1] py-2 text-sm sm:text-base font-medium transition-transform hover:scale-105"
          >
            {opt.text}
          </button>
        ))}
      </div>

      {/* 📍 題數進度 */}
      <p className="text-sm text-gray-700">
        第 {current} / {total} 題
      </p>
    </div>
  );
}
