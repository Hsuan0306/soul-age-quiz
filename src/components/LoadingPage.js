export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-6"></div>
      <p className="text-lg text-gray-700 font-medium">
        哥 / 姊的年紀是秘密，<br />
        但你的靈魂年齡，馬上測給你看！
      </p>
    </div>
  );
}
