import { useState, useContext, useEffect } from "react";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import { questions } from "../../quizQuestions";
import { useNavigate } from "react-router-dom";
import CountDownTimer from "../../components/CountDownTimer/CountDownTimer";
import { timerContext } from "../../context/AssignmentTimerContext";
import "./QuizPage.css";

const QuizPage = () => {
  const { time, setTime } = useContext(timerContext);
  const navigate = useNavigate();
  const [question, setQuestion] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [correctFlag, setCorrectFlag] = useState<boolean>(false);

  useEffect(() => {
    console.log("effect is running!!");
    setTime(Date.now());
  }, []);

  const nextHandler = () => {
    if (question === questions.length) {
      navigate("/results");
    }

    setQuestion(question + 1);
    setSelectedOption("");
    setCorrectFlag(false);
  };
  console.log("rendered!!!");
  console.log("timer obj is : ", time);

  return (
    <main className="quiz__page-main">
      <section className="quiz__questions-count__and__timer">
        <div className="quiz__counter">{`${question}/${questions.length}`}</div>
        <CountDownTimer minutes={5} seconds={0} />
      </section>
      <QuizQuestion
        question={questions[question - 1]}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        correctFlag={correctFlag}
        setCorrectFlag={setCorrectFlag}
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
