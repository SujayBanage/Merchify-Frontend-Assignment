import { useContext } from "react";
import { UserScoreContextObj } from "../../context/UserScoreContext";
import "./QuizOption.css";

interface quizOptionProps {
  option: string;
  index: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  correctOption: string;
  correctFlag: boolean;
  setCorrectFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizOption: React.FC<quizOptionProps> = ({
  option,
  index,
  setSelectedOption,
  selectedOption,
  correctOption,
  correctFlag,
  setCorrectFlag,
}) => {
  const { score, setScore } = useContext(UserScoreContextObj);

  const optionSelectHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSelectedOption(value);

    if (value === correctOption && !correctFlag) {
      setScore(score + 1);
      setCorrectFlag(true);
    } else if (value === correctOption && correctFlag) {
      setScore(score + 1);
    } else if (value !== correctOption && correctFlag) {
      setScore(score - 1);
      setCorrectFlag(false);
    }
  };

  return (
    <div className="quiz__option-div">
      <div className="quiz__option">
        <div
          className={
            selectedOption === option
              ? "quiz__option__outlined-selected"
              : "quiz__option__outlined"
          }
        >
          {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}
        </div>
        <span>{option}</span>
      </div>
      <input
        type="radio"
        value={option}
        name="question"
        id="question"
        onChange={optionSelectHandler}
        checked={option === selectedOption}
        className={option === selectedOption ? "selected_radio" : ""}
      />
    </div>
  );
};

export default QuizOption;
