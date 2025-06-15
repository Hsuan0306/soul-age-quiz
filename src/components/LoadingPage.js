import Image from "next/image";
import "@/styles/loading.css"; // 有打字動畫的樣式

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center">

      {/* 📺 電視畫面排版（仿 QuizPage） */}
      <div className="relative w-[300px] sm:w-[400px] aspect-[1350/970] mb-10">

        {/* 🔴 Loading內容 → 對齊電視螢幕位置 */}
        <div
          className="absolute overflow-hidden flex flex-col items-center justify-center"
          style={{
            top: "13%",        // ← 根據你提供的電視圖分析（如 QuizPage）
            left: "8.5%",
            width: "63.7%",
            height: "67%",
          }}
        >
          {/* 🌀 圈圈 */}
          <div className="h-6 w-6 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-2"></div>

          {/* 🔤 打字 LOADING */}
          <div className="text-red-600 font-extrabold text-[16px] sm:text-[18px] tracking-wider typing">
            LOADING...
          </div>
        </div>

        {/* 🖼️ 中空電視前景圖 */}
        <Image
          src="/images/tv-frame.png"
          alt="TV Frame"
          fill
          className="object-contain pointer-events-none"
        />
      </div>

      {/* 👇 下方說明文字 */}
      <div className="text-[16px] sm:text-[18px] text-gray-700 leading-relaxed">
        <p className="mb-2">哥 / 姊的年紀是秘密，</p>
        <p className="mb-2">但你的靈魂年齡，</p>
        <p>稍等一下，馬上測給你看！</p>
      </div>
    </div>
  );
}
