"use client";

import { useState } from "react";
import QuizIntro from "../components/QuizIntro";
import QuizInstructions from "../components/QuizInstructions";
import QuizPage from "../components/QuizPage";
import ResultPage from "../components/ResultPage";
import LoadingPage from "../components/LoadingPage";

export default function Home() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const quizData = [
    {
      videoUrl: "/videos/q1.mp4",
      question: "Q1｜在你心目中，去 KTV 必唱的華語金曲是？",
      options: [
        { text: "伍佰《挪威的森林》", score: 3 },
        { text: "周杰倫X梁心頤《珊瑚海》", score: 2 },
        { text: "兄弟本色《Fly Out》", score: 1 },
        { text: "陳華《想和你看五月的晚霞》", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q2.mp4",
      question: "Q2｜你心中最經典的電影是？",
      options: [
        { text: "《龍貓》", score: 3 },
        { text: "《鐵達尼號》", score: 2 },
        { text: "《少林足球》", score: 1 },
        { text: "《不可能的任務》", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q3.mp4",
      question: "Q3｜你最懷念的卡通是？",
      options: [
        { text: "《頑皮豹》", score: 3 },
        { text: "《可愛巧虎島》", score: 2 },
        { text: "《真珠美人魚》", score: 1 },
        { text: "《探險活寶》", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q4.mp4",
      question: "Q4｜最讓你中毒的迷因是？",
      options: [
        { text: "瑞克搖", score: 3 },
        { text: "沒有動動的年代", score: 2 },
        { text: "露比醬", score: 1 },
        { text: "大展鴻圖", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q5.mp4",
      question: "Q5｜哪一首廣告歌讓你覺得最洗腦？",
      options: [
        { text: "益可膚", score: 3 },
        { text: "斯斯感冒膠囊", score: 2 },
        { text: "麥香", score: 1 },
        { text: "全聯福利熊", score: 0 },
      ],
    }
  ];

  const handleAnswer = (score) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    // 修正：當 quizIndex（step - 2）等於最後一題時，進入 loading 再跳結果
    if (step - 2 === quizData.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(step + 1); // 前往結果頁
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setStep(0);
  };

  const totalScore = answers.reduce((acc, cur) => acc + cur, 0);

  const renderPage = () => {
    if (isLoading) return <LoadingPage />;
    if (step === 0) return <QuizIntro onStart={() => setStep(1)} />;
    if (step === 1) return <QuizInstructions onNext={() => setStep(2)} />;
    if (step - 2 < quizData.length) {
      return (
        <QuizPage
          data={quizData[step - 2]}
          onSelect={handleAnswer}
          current={step - 1}
          total={quizData.length}
        />
      );
    }
    return <ResultPage score={totalScore} onRestart={restartQuiz} />;
  };

  return <main className="min-h-screen bg-cover"
  style={{ backgroundImage: "url('/images/background.png')" }}>
    {renderPage()}</main>;
}
