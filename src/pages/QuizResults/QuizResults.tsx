import { useContext } from "react";
import { UserScoreContextObj } from "../../context/UserScoreContext";
import { timerContext } from "../../context/AssignmentTimerContext";
import { questionsLength } from "../../quizQuestions";
import Confetti from "react-confetti";
import useWindowSize from "../../hooks/useWindowSize";
import "./QuizResults.css";
import { useNavigate } from "react-router-dom";

const QuizResults = () => {
  const navigate = useNavigate();
  const { score, setScore } = useContext(UserScoreContextObj);
  const { time } = useContext(timerContext);
  const { height, width } = useWindowSize();
  console.log(score);
  console.log(time);

  function formatTime() {
    const diff = Date.now() - time;
    console.log("time diff is : ", diff);
    let seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60) - 3;
    if (seconds >= 60) {
      seconds = seconds - 60;
    }
    return ` ${minutes}Min : ${seconds}Sec `;
  }

  return (
    <main className="quiz__results-main">
      {score >= Math.floor(questionsLength / 2) ? (
        <section className="pass__screen">
          <h3>Congartulations You Passed The Test !!!</h3>

          <div className="quiz__score-div">
            <h3>Score</h3>
            <span>{`${score} / ${questionsLength}`}</span>
          </div>

          <div className="quiz__time-div">
            <h3>Time Taken</h3>
            <span>{formatTime()}</span>
          </div>

          <Confetti width={width} height={height} />
        </section>
      ) : (
        <section className="fail__screen">
          <h3>You Failed The Test</h3>
          <div className="quiz__score-div">
            <h3>Score</h3>
            <span>{`${score} / ${questionsLength}`}</span>
          </div>

          <div className="quiz__time-div">
            <h3>Time Taken</h3>
            <span>{formatTime()}</span>
          </div>
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
