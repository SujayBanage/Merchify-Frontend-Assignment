import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbSwords } from "react-icons/tb";
import { TiDocument } from "react-icons/ti";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import QuizRules from "../../components/QuizRules/QuizRules";
import "./QuizDetailsPage.css";
import userimg from "../../assets/user.jpeg";
import quizimg from "../../assets/quiz.png";

const QuizDetailsPage = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [quizRulesVisible, setQuizRulesVisible] = useState<boolean>(false);

  return (
    <main className="quiz__details-main">
      {quizRulesVisible ? <QuizRules /> : null}
      <header className="quiz__details-header">
        <img src={quizimg} />
      </header>
      <section className="quiz__details-content">
        <h1>The Daily Quiz</h1>
        <div className="quiz__details-options">
          <div className="quiz__details-options-1">
            <div className="options__1">
              <FaRegCommentDots />
              <span>Leave a Comment</span>
            </div>
            <div className="options__1">
              <IoBookmarkOutline />
              <span>Save Quiz</span>
            </div>
            <div className="options__1">
              <TbSwords />
              <span>Challenge a Friend</span>
            </div>
          </div>
          <div className="quiz__details-users__and__ratings">
            <div className="users">
              <div className="users__images">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    if (index === 0)
                      return (
                        <img
                          key={new Date().toISOString() + index}
                          className="user__first"
                          src={userimg}
                        />
                      );
                    else
                      return (
                        <img
                          key={new Date().toISOString() + index}
                          className="user"
                          src={userimg}
                        />
                      );
                  })}
              </div>
              <span>People enrolled</span>
            </div>
            <div className="ratings">
              <div className="rating__stars">
                {Array(5)
                  .fill(0)
                  .map((_, index) => {
                    return (
                      <AiFillStar
                        key={new Date().toISOString() + index}
                        color="yellow"
                        className="stars"
                      />
                    );
                  })}
              </div>
              <span>3 ratings (5.0)</span>
            </div>
          </div>
        </div>
        <p className="quiz__details-description">
          {!readMore
            ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum".slice(
                0,
                200
              ) + "...."
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum"}

          {!readMore ? (
            <button
              className="read__more-button"
              onClick={() => {
                setReadMore(true);
              }}
            >
              Read More
            </button>
          ) : (
            <button
              className="read__less-button"
              onClick={() => {
                setReadMore(false);
              }}
            >
              Read Less
            </button>
          )}
        </p>
      </section>
      <section className="quiz__details-points">
        <h5>This Quiz Includes</h5>
        <div className="options__2">
          <TiDocument />
          <span>50% Passing Percentage</span>
        </div>
        <div className="options__2">
          <AiOutlineQuestionCircle />
          <span>5 Questions</span>
        </div>
        <div className="options__2">
          <AiOutlineClockCircle />
          <span>10 Mins</span>
        </div>
        <div className="options__2">
          <IoAlbumsOutline />
          <span>1 Attempt Daily</span>
        </div>
      </section>
      <button
        className="take__quiz-button"
        onClick={() => setQuizRulesVisible(true)}
      >
        Take Quiz
      </button>
    </main>
  );
};

export default QuizDetailsPage;
