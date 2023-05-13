import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { timerContext } from "../../context/AssignmentTimerContext";
import "./CountDownTimer.css";

interface ItimerProps {
  minutes: number;
  seconds: number;
}

const CountDownTimer: React.FC<ItimerProps> = ({ minutes, seconds }) => {
  const { setTime } = useContext(timerContext);
  const navigate = useNavigate();
  const [timerSeconds, setTimerSeconds] = useState<number>(seconds);
  const [timerMinutes, setTimerMinutes] = useState<number>(minutes);
  const timerRef = useRef<number>();

  const updateTimer = () => {
    if (timerSeconds === 0 && timerMinutes !== 0) {
      setTimerMinutes(timerMinutes - 1);
      setTimerSeconds(59);
    } else if (timerSeconds === 0 && timerMinutes === 0) {
      clearInterval(timerRef.current);
      navigate("/results", {
        replace: true,
      });
      setTime(Date.now());
    } else {
      setTimerSeconds(timerSeconds - 1);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(timerRef.current);
  });

  return (
    <div className="count__down__timer">{`${timerMinutes}:${timerSeconds}`}</div>
  );
};

export default CountDownTimer;
