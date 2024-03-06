import LoginStatus from "./auth/LoginStatus";
import { useContext } from "react";
import TasksContext from "./tasks/tasksContext";
import AuthContext from "./auth/authContext";
import useTasks from "./tasks/useTasks";
import useAuth from "../routing/hooks/useAuth";
import useAuths from "./auth/useAuths";

const NavBar = () => {
  const { tasks } = useTasks();
  const { username, dispatch } = useAuths();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {tasks.length} + {" " + username}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
