export default function ResultPage({ score, onRestart }) {
  const getResult = () => {
    if (score >= 15) return "你是資深靈魂，熱愛懷舊時光";
    if (score >= 9) return "你是 Y2K 靈魂，活在青春年代";
    if (score >= 4) return "你是現代靈魂，與潮流共舞";
    return "你是未來靈魂，思想超前不受限";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h2 className="text-2xl font-bold mb-4">測驗結果</h2>
      <p className="text-lg text-gray-700 mb-4">{getResult()}</p>
      <button
        onClick={onRestart}
        className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700"
      >
        再玩一次
      </button>
    </div>
  );
}
