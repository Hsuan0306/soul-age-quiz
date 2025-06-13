export default function QuizInstructions({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h2 className="text-2xl font-bold mb-4">使用說明</h2>
      <p className="text-md text-gray-600 mb-6">
        共 6 題，每題會播放一段影片後出現選項，依直覺選擇最符合你的答案。
      </p>
      <button
        onClick={onNext}
        className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700"
      >
        我準備好了
      </button>
    </div>
  );
}
