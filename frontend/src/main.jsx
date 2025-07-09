import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import  Setting  from "./pages/setting";
import TaskList  from "./pages/taskList";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="task" element={<TaskList />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
