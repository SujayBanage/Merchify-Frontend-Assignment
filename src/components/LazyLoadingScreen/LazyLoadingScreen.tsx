import { AiOutlineLoading } from "react-icons/ai";
import "./LazyLoadingScreen.css";
const LazyLoadingScreen = () => {
  return (
    <main className="loading__screen">
      <AiOutlineLoading className="loader__icon" />
    </main>
  );
};

export default LazyLoadingScreen;
