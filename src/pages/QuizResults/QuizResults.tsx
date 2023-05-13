import { useContext } from "react";
import { UserScoreContextObj } from "../../context/UserScoreContext";
import { questionsLength } from "../../quizQuestions";
import Confetti from "react-confetti";
import useWindowSize from "../../hooks/useWindowSize";
import "./QuizResults.css";
import { useNavigate } from "react-router-dom";

const QuizResults = () => {
  const navigate = useNavigate();
  const { score, setScore } = useContext(UserScoreContextObj);
  const { height, width } = useWindowSize();
  console.log(score);
  return (
    <main className="quiz__results-main">
      {score >= Math.floor(questionsLength / 2) ? (
        <section className="pass__screen">
          <h2>Congartulations</h2>
          <h3>You Passed The Test</h3>
          <h4>Your Score is {score} </h4>
          <Confetti width={width} height={height} />
        </section>
      ) : (
        <section className="fail__screen">
          <h3>You Failed The Test</h3>
          <h4>Your Score is {score} </h4>
        </section>
      )}
      <button
        className="home__screen-button"
        onClick={() => {
          setScore(0);
          navigate("/");
        }}
      >
        Home Screen
      </button>
    </main>
  );
};

export default QuizResults;
