import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserScoreContext from "./context/UserScoreContext.tsx";
import AssignmentTimerContext from "./context/AssignmentTimerContext.tsx";
import LazyLoadingScreen from "./components/LazyLoadingScreen/LazyLoadingScreen.tsx";
import "./index.css";

// import QuizDetailsPage from "./pages/QuizDetailsPage/QuizDetailsPage.tsx";
// import QuizPage from "./pages/QuizPage/QuizPage.tsx";
// import QuizResults from "./pages/QuizResults/QuizResults.tsx";

const QuizDetailsPage = lazy(
  () => import("./pages/QuizDetailsPage/QuizDetailsPage.tsx")
);

const QuizPage = lazy(() => import("./pages/QuizPage/QuizPage.tsx"));

const QuizResults = lazy(() => import("./pages/QuizResults/QuizResults.tsx"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoadingScreen />}>
        <QuizDetailsPage />
      </Suspense>
    ),
  },
  {
    path: "/quiz",
    element: (
      <Suspense fallback={<LazyLoadingScreen />}>
        <QuizPage />
      </Suspense>
    ),
  },
  {
    path: "/results",
    element: (
      <Suspense fallback={<LazyLoadingScreen />}>
        <QuizResults />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserScoreContext>
      <AssignmentTimerContext>
        <RouterProvider router={AppRouter} />
      </AssignmentTimerContext>
    </UserScoreContext>
  </React.StrictMode>
);
