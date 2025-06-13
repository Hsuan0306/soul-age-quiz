export default function QuizIntro({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-3xl font-bold mb-4">你的靈魂年齡幾歲？</h1>
      <p className="text-lg text-gray-700 mb-6">透過回答幾道問題，看看你是哪個年代的靈魂吧！</p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
      >
        開始測驗
      </button>
    </div>
  );
}
