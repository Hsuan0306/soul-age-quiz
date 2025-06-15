import Image from 'next/image';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

// 動態匯入對應圖片
const resultImages = {
  result1: '/images/result1.png',
  result2: '/images/result2.png',
  result3: '/images/result3.png',
  result4: '/images/result4.png',
};

export default function ResultPage({ score, onRestart }) {
  const resultRef = useRef(null); // ⭐️ 記得加這個
  const getResult = () => {
    if (score >= 12) return { label: "你是資深靈魂，熱愛懷舊時光", key: "result1" };
    if (score >= 8) return { label: "你是 Y2K 靈魂，活在青春年代", key: "result2" };
    if (score >= 4) return { label: "你是現代靈魂，與潮流共舞", key: "result3" };
    return { label: "你是未來靈魂，思想超前不受限", key: "result4" };
  };

  const { label, key } = getResult();

  const handleShare = () => {
    const imagePath = resultImages[key]; // 取得對應圖片路徑
  
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = "測驗結果.png"; // 下載時的檔名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* 結果圖卡 */}
      <div ref={resultRef} className="max-w-[360px] w-full">
        <Image
          src={resultImages[key]}
          alt={label}
          width={360}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* 按鈕區塊 */}
      <div className="mt-6 flex gap-6">
        <button
          onClick={handleShare}
          className="px-9 py-2 bg-[#CF1B21] text-[#E1E1E1] text-sm font-bold hover:scale-105 transition-transform"
        >
          下載結果圖
        </button>
        <button
          onClick={onRestart}
          className="px-10 py-2 bg-[#CF1B21] text-[#E1E1E1] text-sm font-bold hover:scale-105 transition-transform"
        >
          再玩一次
        </button>
      </div>
    </div>
  );
}
