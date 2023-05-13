import { useNavigate } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import "./QuizRules.css";

interface quizRulesProps {}

const QuizRules: React.FC<quizRulesProps> = () => {
  const navigate = useNavigate();
  return (
    <main className="quiz__rules-main">
      <section className="quiz__rules-options">
        <h2>Quiz Rules</h2>
        <div className="options__3">
          <AiOutlineClockCircle size={25} />
          <div>
            <h4>1 Mins</h4>
            <span>Keep in mind that it's a time bound quiz</span>
          </div>
        </div>
        <div className="options__3">
          <AiOutlineQuestionCircle size={25} />
          <div>
            <h4>3 Questions</h4>
            <span>We believe that you will ace it!</span>
          </div>
        </div>
        <div className="options__3">
          <FiAward size={25} />
          <div>
            <h4>50% Passing Criteria</h4>
            <span>All the best! see you on the other side.</span>
          </div>
        </div>

        <p className="caution">
          <BsFillExclamationCircleFill
            className="caution__icon"
            size={18}
            color="purple"
          />
          This quiz can only be attempted once daily
        </p>

        <button
          className="quiz__start-button"
          onClick={() => navigate("/quiz")}
        >
          start
        </button>
      </section>
    </main>
  );
};

export default QuizRules;
