import "./App.css";
import React, { useReducer } from "react";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/auth/AuthProvider";
import TaskProvider from "./state-management/tasks/TaskProvider";
import Counter from "./state-management/counter/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Counter />
        <NavBar />
        <LoginStatus />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
