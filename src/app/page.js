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
        { text: "伍佰《挪威的森林》（1996）", score: 3 },
        { text: "周杰倫 & LARA《珊瑚海》（2005）", score: 2 },
        { text: "兄弟本色《Fly Out》（2016）", score: 1 },
        { text: "陳華《想和你看五月的晚霞》（2022）", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q2.mp4",
      question: "Q2｜你心目中最經典的電影是？",
      options: [
        { text: "《龍貓》（1988 日本）", score: 3 },
        { text: "《鐵達尼號》（1997 美國）", score: 2 },
        { text: "《少林足球》（2001 香港）", score: 1 },
        { text: "《不可能的任務 7》（2025 美國）", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q3.mp4",
      question: "Q3｜你最懷念的卡通是？",
      options: [
        { text: "《頑皮豹》（1985）", score: 3 },
        { text: "《可愛巧虎島》（1993）", score: 2 },
        { text: "《真珠美人魚》（2003）", score: 1 },
        { text: "《探險活寶》（2010）", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q4.mp4",
      question: "Q4｜哪一個迷因／網路梗圖讓你最印象深刻？",
      options: [
        { text: "瑞克搖（Rickroll，1987）", score: 3 },
        { text: "六月是夏天（2024）", score: 2 },
        { text: "露比醬（2025.4）", score: 1 },
        { text: "大展鴻圖（2025.6）", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q5.mp4",
      question: "Q5｜哪一首廣告歌讓你覺得最洗腦？",
      options: [
        { text: "「益可膚」（1989）", score: 3 },
        { text: "「感冒用斯斯～」（1998）", score: 2 },
        { text: "麥 My Dear Friend（2015）", score: 1 },
        { text: "全聯福利熊（2017）", score: 0 },
      ],
    },
    {
      videoUrl: "/videos/q6.mp4",
      question: "Q6｜哪個遊戲你覺得最好玩？",
      options: [
        { text: "貪食蛇（1976）", score: 3 },
        { text: "摩爾莊園 (2008)", score: 2 },
        { text: "subway surfers（2012）", score: 1 },
        { text: "魔物獵人（2025）", score: 0 },
      ],
    },
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
      }, 2500);
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

  return <main className="min-h-screen bg-neutral-100">{renderPage()}</main>;
}
