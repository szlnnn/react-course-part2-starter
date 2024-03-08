import LoginStatus from "./auth/LoginStatus";
import { useContext } from "react";
import TasksContext from "./tasks/tasksContext";
import AuthContext from "./auth/authContext";
import useTasks from "./tasks/useTasks";
import useAuth from "../routing/hooks/useAuth";
import useAuths from "./auth/useAuths";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useTasks();
  const { username, dispatch } = useAuths();
  const counter = useCounterStore((s) => s.counter);

  console.log("NavBar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {counter} + {" " + username}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
