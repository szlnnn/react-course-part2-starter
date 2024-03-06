import { useContext } from "react";
import AuthContext from "../auth/authContext";
import TasksContext from "./tasksContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;
