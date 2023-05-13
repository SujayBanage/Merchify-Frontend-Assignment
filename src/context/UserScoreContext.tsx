import { createContext, useState } from "react";

export const UserScoreContextObj = createContext<{
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}>({
  score: 0,
  setScore: () => {},
});

interface IuserContextProps {
  children: React.ReactNode;
}

const UserScoreContext: React.FC<IuserContextProps> = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  return (
    <UserScoreContextObj.Provider
      value={{
        score,
        setScore,
      }}
    >
      {children}
    </UserScoreContextObj.Provider>
  );
};

export default UserScoreContext;
