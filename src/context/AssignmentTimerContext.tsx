import { createContext, useState } from "react";

interface ItimerContext {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export const timerContext = createContext<ItimerContext>({
  time: 0,
  setTime: () => {},
});

const AssignmentTimerContext: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [time, setTime] = useState<number>(0);

  return (
    <timerContext.Provider
      value={{
        time,
        setTime,
      }}
    >
      {children}
    </timerContext.Provider>
  );
};

export default AssignmentTimerContext;
