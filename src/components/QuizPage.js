export default function QuizPage({ data, onSelect, current, total }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center py-10 px-4">
      {/* 小電視影片區塊 */}
      <div className="w-full max-w-md aspect-[4/3] bg-black rounded-xl overflow-hidden shadow-lg border-4 border-gray-700 mb-6">
        <video className="w-full h-full object-cover" controls src={data.videoUrl} />
      </div>

      <h3 className="text-xl font-bold mb-4 text-center">{data.question}</h3>
      <div className="flex flex-col gap-3 w-full max-w-md">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(opt.score)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-blue-100 transition"
          >
            {opt.text}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        第 {current} / {total} 題
      </p>
    </div>
  );
}
