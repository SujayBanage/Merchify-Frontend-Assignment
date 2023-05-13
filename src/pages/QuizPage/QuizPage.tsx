import { useState } from "react";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import { questions } from "../../quizQuestions";
import { useNavigate } from "react-router-dom";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import "./QuizPage.css";
const QuizPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const nextHandler = () => {
    if (question === questions.length) {
      navigate("/results");
    }
    setQuestion(question + 1);
    setSelectedOption("");
  };

  return (
    <main className="quiz__page-main">
      <section className="quiz__questions-count__and__timer">
        <div className="quiz__counter">{`${question}/${questions.length}`}</div>
        <CountDownTimer minutes={1} seconds={0} />
      </section>
      <QuizQuestion
        question={questions[question - 1]}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <button
        className="next__question-button"
        disabled={selectedOption.length !== 0 ? false : true}
        onClick={nextHandler}
      >
        Next
      </button>
    </main>
  );
};

export default QuizPage;
