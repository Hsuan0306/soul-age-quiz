import Image from "next/image";

export default function QuizInstructions({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center">
      
      {/* 外層容器，控制寬度與置中 */}
      <div className="relative w-full max-w-[90%] sm:max-w-xl md:max-w-4xl mx-auto">
        
        {/* 黑色卡片 */}
        <div className="relative bg-[#2B2C2C] text-[#E1E1E1] rounded-xl px-6 pt-32 pb-10 shadow-lg z-0 mt-4 overflow-visible">
          
          {/* 👤 人物圖在卡片內部，以卡片自身為定位基準 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] z-10">
            <Image
              src="/images/person.png"
              alt="人物圖"
              width={350}
              height={350}
              className="sm:w-[280px] w-[200px] h-auto"
            />
          </div>

          {/* 黑卡片內文區塊 */}
          <div className="space-y-8 text-left text-sm sm:text-base leading-relaxed">
          {[
            "你即將面臨大量「回憶殺」襲擊，請從每題選出最符合你心中「經典代表」的答案",
            "點擊題目上方的電視機螢幕，就可以播放選項對應的影片／圖片，幫助你回憶經典",
            "由於選項有限，如果沒有出現你心中的 No.1，也請盡量選出「最貼近」的答案唷！",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-6 text-center"
            >
              <Image
                src="/images/boom.png"
                alt="icon"
                width={18}
                height={18}
              />
              <span className="max-w-[80%]">{text}</span>
              <Image
                src="/images/boom.png"
                alt="icon"
                width={18}
                height={18}
              />
            </div>
          ))}
          </div>

          {/* 按鈕 */}
          <div className="mt-12 text-center">
            <button
              onClick={onNext}
              className="px-24 py-2 bg-[#CF1B21] text-[#E1E1E1] text-[14px] font-bold cursor-pointer hover:scale-105 transition-transform"
            >
              我知道了！
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
