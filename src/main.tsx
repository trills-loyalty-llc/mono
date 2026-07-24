import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./app/app";
import { Home } from "./features/home/home";
import "../src/styles/index.scss";
import { AddOperatorContainer } from "./features/operators/add/add-operator-container";
import { OperatorIndexContainer } from "./features/operators/index/operator-index.container";

const root = createRoot(document.querySelector("#root") ?? new Element());

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "operators",
        children: [
          { index: true, Component: OperatorIndexContainer },
          { path: "add", Component: AddOperatorContainer },
        ],
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
