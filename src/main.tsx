import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuizDetailsPage from "./pages/QuizDetailsPage/QuizDetailsPage.tsx";
import QuizPage from "./pages/QuizPage/QuizPage.tsx";
import QuizResults from "./pages/QuizResults/QuizResults.tsx";
import UserScoreContext from "./context/UserScoreContext.tsx";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <QuizDetailsPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/results",
    element: <QuizResults />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserScoreContext>
      <RouterProvider router={AppRouter} />
    </UserScoreContext>
  </React.StrictMode>
);
