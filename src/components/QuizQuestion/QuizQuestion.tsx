import "./QuizQuestion.css";
import { Iquestion } from "../../quizQuestions";
import QuizOption from "../QuizOption/QuizOption";
interface quizQuestionProps {
  question: Iquestion;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  correctFlag: boolean;
  setCorrectFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuizQuestion: React.FC<quizQuestionProps> = ({
  question,
  setSelectedOption,
  selectedOption,
  correctFlag,
  setCorrectFlag,
}) => {
  return (
    <section className="quiz__question">
      <label htmlFor="question">{question.question}</label>
      {question.options.map((option, index) => {
        return (
          <QuizOption
            key={new Date().toISOString() + index}
            option={option}
            index={index}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            correctOption={question.correctOption}
            correctFlag={correctFlag}
            setCorrectFlag={setCorrectFlag}
          />
        );
      })}
    </section>
  );
};

export default QuizQuestion;
