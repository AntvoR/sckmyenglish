import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Answers } from "./pages/Answers";
import { Useful } from "./pages/Useful";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "answers", Component: Answers },
      { path: "useful", Component: Useful },
    ],
  },
]);
